import * as d3 from 'd3'
import settings from '../../../settings'
import { NodeData, NodesSelection, NodeType } from '../../../types'
import { MoveTransition } from '../helpers/createTransition'
import { getTargetNodeData } from '../helpers/getTargetNodeData'
import { AbstractCircleElement } from './AbstractCircleElement'

const dragOrigin = { x: 0, y: 0 }

export class MouseCircleElement extends AbstractCircleElement {
  // Variables for dragging circles and members
  private dragNodes: NodesSelection | undefined
  private dragTarget: NodeData | null | undefined
  private dragTargets: NodesSelection | undefined

  enter(selection: NodesSelection, transition: MoveTransition) {
    const that = this
    const graph = this.graph
    const {
      params: { events },
    } = this.graph

    // Hover
    selection
      .on('mouseover.hover', function () {
        const g = d3.select<SVGGElement, NodeData>(this)

        // Add circle border
        if (!that.dragNodes && events.onCircleClick && events.onMemberClick) {
          g.attr('data-hover', '')
        }
      })
      .on('mouseout.hover', function () {
        const g = d3.select<SVGGElement, NodeData>(this)
        // Remove circle border
        if (!that.dragNodes) {
          g.attr('data-hover', null)
        }
      })

    // Add events
    selection
      .filter(
        (d) =>
          d.data.type === NodeType.Circle || d.data.type === NodeType.Member
      )

      // Click
      .on('click', (event, d: NodeData) => {
        if (d.data.type === NodeType.Circle && d.data.entityId) {
          // Click on circle
          events.onCircleClick?.(d.data.entityId)
        } else if (
          d.data.type === NodeType.Member &&
          d.data.parentId &&
          d.data.entityId
        ) {
          // Click on member
          events.onMemberClick?.(d.data.parentId, d.data.entityId)
        }
      })

      // Drag
      .call(
        d3
          .drag<SVGGElement, NodeData>()
          .filter(function (event, d) {
            return (
              // Disable when mousewheel is pressed
              event.button !== 1 &&
              // Control/Command key is pressed
              (event.ctrlKey || event.metaKey) &&
              // Disable when events are not provided
              events.onCircleMove &&
              events.onMemberMove &&
              // Disable for invited circles (links)
              d.data.id.indexOf('_') === -1
            )
          })
          .on('start', function (event, dragNode) {
            // Register mouse position
            dragOrigin.x = event.x
            dragOrigin.y = event.y

            // Register selection of circles and its descendants
            const descendants = dragNode.descendants()
            const circles = graph.d3Root.selectAll<SVGGElement, NodeData>(
              '.circle'
            )
            that.dragNodes = circles
              .filter((node) => descendants.includes(node))
              .raise() // Put on top of everything
            that.dragTargets = circles.filter(
              (node) => !descendants.includes(node)
            )

            // Highlight dragged circle
            d3.select(this).attr('data-dragging', '')
          })
          .on('drag', function (event) {
            const dX = event.x - dragOrigin.x
            const dY = event.y - dragOrigin.y
            if (that.dragNodes && that.dragTargets) {
              // Move circle and its descendants
              that.dragNodes.attr(
                'transform',
                (d) => `translate(${d.x + dX},${d.y + dY})`
              )
              // Move circles names
              that.dragNodes.data().forEach((d) => {
                graph.d3Root
                  .select(`#circle-name-${d.data.id}`)
                  .attr(
                    'transform',
                    (d) => `translate(${d.x + dX},${d.y + dY})`
                  )
              })

              const targetData = getTargetNodeData(
                that.dragTargets,
                event,
                graph
              )

              if (targetData !== that.dragTarget) {
                // Unhighlight previously targeted circle
                that.dragTargets
                  .filter((node) => node === that.dragTarget)
                  .attr('data-drag-target', null)
                // Highlight newly targeted circle
                that.dragTargets
                  .filter((node) => node === targetData)
                  .attr('data-drag-target', '')

                that.dragTarget = targetData
              }
            }
          })
          .on('end', function (event, dragNode) {
            const dragNodes = that.dragNodes
            const shiftKey: boolean = event.sourceEvent.shiftKey

            // Drag end
            let actionMoved = false
            if (that.dragTargets && that.dragTarget) {
              const targetCircleId = that.dragTarget.data.id

              const focusTargetCircle = () => {
                that.graph.focusNodeIdAfterData(targetCircleId, true)
              }
              const catchDragError = () =>
                dragNodes && that.resetDragNodes(dragNodes)

              const differentParent = dragNode.data.parentId !== targetCircleId
              if (
                dragNode.data.type === NodeType.Circle &&
                dragNode.data.entityId
              ) {
                if (shiftKey) {
                  // Copy circle to another circle
                  events
                    .onCircleCopy?.(dragNode.data.entityId, targetCircleId)
                    .then((newCircleId) => {
                      if (newCircleId) {
                        focusTargetCircle()
                      }
                    })
                } else if (differentParent) {
                  // Move circle to another circle
                  events
                    .onCircleMove?.(dragNode.data.entityId, targetCircleId)
                    .then(focusTargetCircle)
                    .catch(catchDragError)
                  actionMoved = true
                }
              } else if (
                dragNode.data.type === NodeType.Member &&
                dragNode.data.parentId &&
                dragNode.data.entityId &&
                differentParent &&
                targetCircleId
              ) {
                const memberId = dragNode.data.entityId
                if (shiftKey) {
                  // Copy member to another circle
                  events
                    .onMemberAdd?.(memberId, targetCircleId)
                    .then(focusTargetCircle)
                } else {
                  // Move member to another circle
                  events
                    .onMemberMove?.(
                      dragNode.data.entityId,
                      dragNode.data.parentId,
                      targetCircleId
                    )
                    .then(focusTargetCircle)
                    .catch(catchDragError)
                  actionMoved = true
                }
              }

              // Unhighlight target circle
              if (that.dragTarget) {
                that.dragTargets
                  .filter((node) => node === that.dragTarget)
                  .attr('data-drag-target', null)
              }
            }

            // Reset moved circle
            d3.select(this).attr('data-dragging', null)

            // Reset dragged circles
            if (dragNodes && !actionMoved) {
              that.resetDragNodes(dragNodes)
            }

            that.dragNodes = undefined
            that.dragTargets = undefined
            that.dragTarget = undefined
          })
      )
  }

  update(selection: NodesSelection, transition: MoveTransition) {}

  exit(selection: NodesSelection, transition: MoveTransition) {}

  private resetDragNodes(dragNodes: NodesSelection) {
    const transition = d3
      .transition()
      .duration(settings.move.duration)
      .ease(settings.move.transition)

    dragNodes
      .transition(transition)
      .attr('transform', (d) => `translate(${d.x},${d.y})`)

    // Reset circles names
    dragNodes.data().forEach((d) => {
      this.graph.d3Root
        .select(`#circle-name-${d.data.id}`)
        .transition(transition)
        .attr('transform', (d) => `translate(${d.x},${d.y})`)
    })
  }
}

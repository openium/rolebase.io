import { CircleProvider } from '@/circle/contexts/CIrcleContext'
import { CircleMemberContext } from '@/circle/contexts/CircleMemberContext'
import BrandLogo from '@/common/atoms/BrandLogo'
import Loading from '@/common/atoms/Loading'
import { useElementSize } from '@/common/hooks/useElementSize'
import useOverflowHidden from '@/common/hooks/useOverflowHidden'
import useQueryParams from '@/common/hooks/useQueryParams'
import Page404 from '@/common/pages/Page404'
import CirclesSVGGraph from '@/graph/CirclesSVGGraph'
import { GraphProvider } from '@/graph/contexts/GraphContext'
import { CirclesGraphViews, GraphEvents } from '@/graph/types'
import { Box } from '@chakra-ui/react'
import { useGetPublicCirclesQuery } from '@gql'
import { useStoreActions, useStoreState } from '@store/hooks'
import React, { useContext, useEffect, useMemo, useRef } from 'react'
import settings from 'src/settings'
import CircleCard from './CircleCard'
import MemberCard from './MemberCard'
import ModalPanel from './ModalPanel'

type Params = {
  orgId: string
  view: CirclesGraphViews
  zoom: string
}

export default function OrgPage() {
  useOverflowHidden()
  const queryParams = useQueryParams<Params>()

  const { data, loading, error } = useGetPublicCirclesQuery({
    skip: !queryParams.orgId,
    variables: {
      orgId: queryParams.orgId!,
    },
  })

  if (error) {
    // Don't display error for user, only in console
    console.error(error)
  }

  // Fetch public data of organization
  const actions = useStoreActions((actions) => ({
    setCurrentId: actions.org.setCurrentId,
    setSubscriptionResult: actions.org.setSubscriptionResult,
  }))

  useEffect(() => {
    if (!queryParams.orgId || !data?.circle[0]) return

    actions.setCurrentId(queryParams.orgId)

    actions.setSubscriptionResult({
      // Enrich data with empty values to match interfaces
      result: data
        ? {
            id: queryParams.orgId,
            archived: false,
            createdAt: new Date().toISOString(),
            name: 'Org',
            defaultWorkedMinPerWeek: 0,
            defaultGraphView: view,
            shareMembers: true,
            shareOrg: true,
            protectGovernance: false,
            circles: data.circle.map((c) => ({
              ...c,
              archived: false,
              members: c.members.map((m) => ({
                ...m,
                archived: false,
                avgMinPerWeek: 0,
              })),
            })),
            roles: data.role,
            members: data.member.map((m) => ({
              ...m,
              archived: false,
              description: '',
            })),
          }
        : undefined,
      loading: false,
      error,
    })
  }, [queryParams.orgId, data])

  // Graph view
  const view =
    queryParams.view && CirclesGraphViews[queryParams.view]
      ? queryParams.view
      : CirclesGraphViews.AllCircles

  // Selected circle & member
  const { circleId, memberId, goTo } = useContext(CircleMemberContext)!

  // Data
  const circles = useStoreState((state) => state.org.circles)
  const events: GraphEvents = useMemo(
    () => ({
      onCircleClick: goTo,
      onMemberClick: goTo,
      onClickOutside: () => goTo(),
    }),
    []
  )

  // Content size
  const boxRef = useRef<HTMLDivElement>(null)
  const boxSize = useElementSize(boxRef)

  return (
    <GraphProvider>
      <Box
        ref={boxRef}
        position="absolute"
        top={0}
        left={0}
        right={0}
        h="100vh"
        overflow="hidden"
      >
        <Box position="absolute" zIndex={1} top={5} left={5}>
          <a href={settings.websiteUrl} target="_blank" rel="noreferrer">
            <BrandLogo size="sm" />
          </a>
        </Box>

        {loading ? <Loading center active /> : !data?.circle[0] && <Page404 />}

        {circles && boxSize && (
          <CirclesSVGGraph
            view={view}
            circles={circles}
            events={events}
            width={boxSize.width}
            height={boxSize.height}
            selectedCircleId={circleId}
            panzoomDisabled={queryParams.zoom === undefined}
          />
        )}

        {memberId ? (
          <ModalPanel isOpen onClose={goTo}>
            <MemberCard id={memberId} selectedCircleId={circleId} />
          </ModalPanel>
        ) : (
          circleId && (
            <ModalPanel isOpen onClose={goTo}>
              <CircleProvider circleId={circleId}>
                <CircleCard id={circleId} />
              </CircleProvider>
            </ModalPanel>
          )
        )}
      </Box>
    </GraphProvider>
  )
}

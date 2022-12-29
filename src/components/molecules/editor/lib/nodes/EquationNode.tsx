/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical'

import { $applyNodeReplacement, DecoratorNode } from 'lexical'
import React, { Suspense } from 'react'

const EquationComponent = React.lazy(
  // @ts-ignore
  () => import('./EquationComponent')
)

export type SerializedEquationNode = Spread<
  {
    type: 'equation'
    equation: string
    inline: boolean
  },
  SerializedLexicalNode
>

export class EquationNode extends DecoratorNode<React.ReactNode> {
  __equation: string
  __inline: boolean
  __isNew: boolean

  static getType(): string {
    return 'equation'
  }

  static clone(node: EquationNode): EquationNode {
    return new EquationNode(node.__equation, node.__inline, true, node.__key)
  }

  constructor(
    equation: string,
    inline?: boolean,
    isNew?: boolean,
    key?: NodeKey
  ) {
    super(key)
    this.__equation = equation
    this.__inline = inline ?? false
    this.__isNew = isNew ?? false
  }

  static importJSON(serializedNode: SerializedEquationNode): EquationNode {
    const node = $createEquationNode(
      serializedNode.equation,
      serializedNode.inline,
      false
    )
    return node
  }

  exportJSON(): SerializedEquationNode {
    return {
      equation: this.getEquation(),
      inline: this.__inline,
      type: 'equation',
      version: 1,
    }
  }

  createDOM(_config: EditorConfig): HTMLElement {
    return document.createElement(this.__inline ? 'span' : 'div')
  }

  updateDOM(prevNode: EquationNode): boolean {
    // If the inline property changes, replace the element
    return this.__inline !== prevNode.__inline
  }

  getEquation(): string {
    return this.__equation
  }

  setEquation(equation: string): void {
    const writable = this.getWritable()
    writable.__equation = equation
  }

  decorate() {
    return (
      <Suspense fallback={null}>
        <EquationComponent
          equation={this.__equation}
          inline={this.__inline}
          nodeKey={this.__key}
          showEditor={this.__isNew}
        />
      </Suspense>
    )
  }
}

export function $createEquationNode(
  equation = '',
  inline = false,
  isNew = true
): EquationNode {
  const equationNode = new EquationNode(equation, inline, isNew)
  return $applyNodeReplacement(equationNode)
}

export function $isEquationNode(
  node: LexicalNode | null | undefined
): node is EquationNode {
  return node instanceof EquationNode
}

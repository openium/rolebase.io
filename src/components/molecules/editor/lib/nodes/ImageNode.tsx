/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical'

import { $applyNodeReplacement, DecoratorNode } from 'lexical'
import React, { Suspense } from 'react'

const ImageComponent = React.lazy(
  // @ts-ignore
  () => import('./ImageComponent')
)

export interface ImagePayload {
  src: string
  alt: string
  maxWidth?: number
  width?: number
  height?: number
  key?: NodeKey
}

function convertImageElement(domNode: Node): null | DOMConversionOutput {
  if (domNode instanceof HTMLImageElement) {
    const { alt, src } = domNode
    const node = $createImageNode({ src, alt })
    return { node }
  }
  return null
}

export type SerializedImageNode = Spread<
  {
    height?: number
    maxWidth: number
    src: string
    width?: number
    alt: string
    type: 'image'
    version: 1
  },
  SerializedLexicalNode
>

export class ImageNode extends DecoratorNode<React.ReactNode> {
  __src: string
  __alt: string
  __width: 'inherit' | number
  __height: 'inherit' | number
  __maxWidth: number

  static getType(): string {
    return 'image'
  }

  static clone(node: ImageNode): ImageNode {
    return new ImageNode(
      node.__src,
      node.__alt,
      node.__maxWidth,
      node.__width,
      node.__height,
      node.__key
    )
  }

  static importJSON(serializedNode: SerializedImageNode): ImageNode {
    const { height, width, maxWidth, src, alt } = serializedNode
    const node = $createImageNode({
      src,
      alt,
      maxWidth,
      height,
      width,
    })
    return node
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('img')
    element.setAttribute('src', this.__src)
    element.setAttribute('alt', this.__alt)
    return { element }
  }

  static importDOM(): DOMConversionMap | null {
    return {
      img: () => ({
        conversion: convertImageElement,
        priority: 0,
      }),
    }
  }

  constructor(
    src: string,
    alt: string,
    maxWidth: number,
    width?: 'inherit' | number,
    height?: 'inherit' | number,
    key?: NodeKey
  ) {
    super(key)
    this.__src = src
    this.__alt = alt
    this.__maxWidth = maxWidth
    this.__width = width || 'inherit'
    this.__height = height || 'inherit'
  }

  exportJSON(): SerializedImageNode {
    return {
      src: this.getSrc(),
      alt: this.__alt,
      maxWidth: this.__maxWidth,
      width: this.__width === 'inherit' ? 0 : this.__width,
      height: this.__height === 'inherit' ? 0 : this.__height,
      type: 'image',
      version: 1,
    }
  }

  setWidthAndHeight(
    width: 'inherit' | number,
    height: 'inherit' | number
  ): void {
    const writable = this.getWritable()
    writable.__width = width
    writable.__height = height
  }

  // View

  createDOM(config: EditorConfig): HTMLElement {
    const span = document.createElement('span')
    const theme = config.theme
    const className = theme.image
    if (className !== undefined) {
      span.className = className
    }
    return span
  }

  updateDOM(): false {
    return false
  }

  getSrc(): string {
    return this.__src
  }

  decorate() {
    return (
      <Suspense fallback={null}>
        <ImageComponent
          src={this.__src}
          altText={this.__alt}
          width={this.__width}
          height={this.__height}
          maxWidth={this.__maxWidth}
          nodeKey={this.getKey()}
          resizable={true}
        />
      </Suspense>
    )
  }
}

export function $createImageNode({
  height,
  maxWidth = 500,
  src,
  width,
  alt,
  key,
}: ImagePayload): ImageNode {
  return $applyNodeReplacement(
    new ImageNode(src, alt, maxWidth, width, height, key)
  )
}

export function $isImageNode(
  node: LexicalNode | null | undefined
): node is ImageNode {
  return node instanceof ImageNode
}

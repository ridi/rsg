import * as React from 'react';
import classNames from 'classnames'

import ThumbnailChildren from './thumbnail/'
import MetadataChildren from './metadata/'

import { dto2props, BookProps } from './props/toProps'

export interface RootComponents {
  Thumbnail: ThumbnailChildren
  Metadata: MetadataChildren
}

class Components {
  public Thumbnail: ThumbnailChildren
  public Metadata: MetadataChildren

  constructor (dto: object) {
    const { thumbnail, metadata } = dto2props(dto)
    this.Thumbnail = new ThumbnailChildren(thumbnail)
    this.Metadata = new MetadataChildren(metadata)
  }
}

export interface ComponentProps {
  dto: { id: string }
  tagName?: string
  children?: (Root: RootComponents, rendered?: JSX.Element) => React.ReactElement<any>
  layout?: string
}

export const Book: React.SFC<ComponentProps> = (props) => {
  const {
    dto,
    tagName,
    children,
  } = props

  if (typeof children !== 'function') {
    console.error('Children function is required. or use a BookPresets.')
  }

  const DEFAULT_LAYOUT = 'portrait'
  const layout = props.layout || DEFAULT_LAYOUT
  const Element = props.tagName || 'div'

  return (
    <Element
      className={classNames('RSGBook', `RSGBook-layout-${ layout }`)}
      key={dto.id}
    >
      {children(new Components(dto))}
    </Element>
  )
}

export { BookPresets } from './presets'

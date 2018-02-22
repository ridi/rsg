import * as React from 'react';

import {
  Thumbnail,
  ThumbnailProps,
  ComponentProps as ThumbnailComponentProps,
} from './thumbnail'

import {
  Metadata,
  MetadataProps,
  ComponentProps as MetadataComponentProps,
  PresetEnums as MetadataPresets,
} from './metadata'

export interface BookProps {
  thumbnail: ThumbnailProps
  metadata: MetadataProps
}

export interface RootComponents {
  Thumbnail: React.SFC<ThumbnailComponentProps>
  Metadata: React.SFC<MetadataComponentProps>
}

export type ComponentProps = {
  tagName?: string
  key?: string | number
  children?: (Root: RootComponents) => React.ReactElement<any>
}

interface Components extends BookProps {}
class Components implements RootComponents {
  constructor (props: BookProps) {
    this.thumbnail = props.thumbnail
    this.metadata = props.metadata
  }
  Thumbnail = (componentProps: ThumbnailComponentProps) => {
    return <Thumbnail
      {...this.thumbnail}
      {...componentProps}
    />
  }
  Metadata = (componentProps: MetadataComponentProps) => {
    return <Metadata
      {...this.metadata}
      {...componentProps}
    />
  }
}

const Book: React.SFC<BookProps & ComponentProps> = (props) => {
  const {
    thumbnail,
    metadata,
    children,
  } = props

  const Element = props.tagName || 'div'
  const Root = new Components({ thumbnail, metadata })

  return (
    <Element className='RSGBook' key={props.key}>
      {
        typeof children === 'function'
          ? children(Root)
          : <>
              <Root.Thumbnail />
              <Root.Metadata />
            </>
      }
    </Element>
  )
}

export {
  Book,
  MetadataPresets,
}

export { dto2props } from './dto/toProps'

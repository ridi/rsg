import * as React from 'react';

import {
  Thumbnail,
  ThumbnailProps,
} from './thumbnail'

import {
  Metadata,
  MetadataProps,
  ComponentProps as MetadataComponentProps,
  PresetEnums,
} from './metadata'

export interface BookProps {
  thumbnail: ThumbnailProps
  metadata: MetadataProps
}

export interface RootComponents {
  Thumbnail: React.SFC<{}>
  Metadata: React.SFC<MetadataComponentProps>
}

export interface ComponentProps {
  tagName?: string
  index?: number
  metadataPreset?: PresetEnums
  thumbnailSize?: number
  landscape?: boolean
  children?: (Root: RootComponents) => React.ReactElement<any>
}

interface Components extends BookProps {}
class Components implements RootComponents {
  constructor (props: BookProps) {
    this.thumbnail = props.thumbnail
    this.metadata = props.metadata
  }
  Thumbnail = () => {
    return <Thumbnail {...this.thumbnail} />
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
    metadataPreset,
    thumbnailSize,
    landscape,
    children,
  } = props

  const Element = props.tagName || 'div'
  const Root = new Components({ thumbnail, metadata })

  return (
    <Element className='RSGBook'>
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
  PresetEnums as Presets,
}

export { dto2props } from './dto/toProps'

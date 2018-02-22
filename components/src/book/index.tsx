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
  landscape?: boolean
}

export interface RootComponents {
  Thumbnail: React.SFC<ThumbnailComponentProps>
  Metadata: React.SFC<MetadataComponentProps>
}

export type ComponentProps = {
  tagName?: string
  key?: string | number
  thumbnailProps?: ThumbnailComponentProps
  metadataProps?: MetadataComponentProps
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
    thumbnailProps,
    metadataProps,
    children,
    landscape,
  } = props

  const Element = props.tagName || 'div'
  const Root = new Components({ thumbnail, metadata })
  const orientation = landscape ? 'landscape' : 'portrait'

  return (
    <Element className={`RSGBook RSGBook-orientation-${ orientation }`} key={props.key}>
      {
        typeof children === 'function'
          ? children(Root)
          : <>
              <Root.Thumbnail {...thumbnailProps} />
              <Root.Metadata {...metadataProps} />
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

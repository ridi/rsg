import * as React from 'react';
import classNames from 'classnames'

import {
  Thumbnail,
  ComponentProps as ThumbnailComponentProps,
} from './thumbnail'

import {
  Metadata,
  ComponentProps as MetadataComponentProps,
  PresetEnums as MetadataPresets,
} from './metadata'

import { dto2props, BookProps } from './dto/toProps'

export interface RootComponents {
  Thumbnail: React.SFC<ThumbnailComponentProps>
  Metadata: React.SFC<MetadataComponentProps>
}

class Components implements RootComponents {
  private props: BookProps

  constructor (props: BookProps) {
    this.props = props
  }

  Thumbnail: React.SFC<ThumbnailComponentProps> = ComponentProps => (
    <Thumbnail
      {...this.props.thumbnail}
      {...ComponentProps}
    />
  )
  Metadata: React.SFC<MetadataComponentProps> = ComponentProps => (
    <Metadata
      {...this.props.metadata}
      {...ComponentProps}
    />
  )
}

export type ComponentProps = {
  tagName?: string
  key?: string | number
  dto?: object
  thumbnailProps?: ThumbnailComponentProps
  metadataProps?: MetadataComponentProps
  children?: (Root: RootComponents) => React.ReactElement<any>
  landscape?: boolean
}

const Book: React.SFC<ComponentProps> = (props) => {
  const {
    dto,
    thumbnailProps,
    metadataProps,
    children,
    landscape,
  } = props

  const Element = props.tagName || 'div'
  const Root = new Components(dto2props(dto))

  const orientation = landscape ? 'landscape' : 'portrait'

  return (
    <Element
      className={classNames(
        'RSGBook',
        `RSGBook-orientation-${orientation}`,
      )}
      key={props.key}
    >
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

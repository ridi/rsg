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

export interface BookChildren {
  Thumbnail: React.SFC<{}>
  Metadata: React.SFC<MetadataComponentProps>
}

interface RootComponents extends BookChildren {
  props?: ComponentProps
}

class RootComponents {
  constructor (props: ComponentProps) {
    this.props = props
  }
  Thumbnail = () => {
    return <Thumbnail {...this.props.thumbnail} />
  }
  Metadata = () => {
    return <Metadata {...this.props.metadata} />
  }
}

export interface BookProps {
  thumbnail: ThumbnailProps
  metadata: MetadataProps
}
export interface ComponentProps extends BookProps {
  tagName?: string
  index?: number
  metadataPreset?: PresetEnums
  thumbnailSize?: number
  landscape?: boolean
  children?: (Components: BookChildren) => React.ReactElement<any>
}

const Book: React.SFC<ComponentProps> = (props) => {
  const {
    thumbnail: thumbnailProps,
    metadata: metadataProps,
    metadataPreset,
    thumbnailSize,
    landscape,
    children,
  } = props

  const Element = props.tagName || 'div'
  const Components = new RootComponents(props)
  return (
    <Element className='RSGBook'>
      {
        typeof children === 'function'
          ? children(Components)
          : <>
              <Components.Thumbnail />
              <Components.Metadata />
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

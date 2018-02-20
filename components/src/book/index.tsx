import * as React from 'react';
import { Thumbnail, ThumbnailProps } from './thumbnail'
import { Metadata, MetadataProps, PresetEnums } from './metadata'

export interface BookProps {
  thumbnail: ThumbnailProps
  metadata: MetadataProps
}
export interface BookComponentProps extends  BookProps {
  tagName?: string
  index?: number
  metadataPreset?: PresetEnums
  thumbnailSize: number
  landscape?: boolean
}

const Book: React.SFC<BookComponentProps> = (props) => {
  const {
    thumbnail: thumbnailProps,
    metadata: metadataProps,
    metadataPreset,
    thumbnailSize,
    landscape,
  } = props

  const Element = props.tagName || 'div'
  return (
    <Element className='RSGBook'>
      <Thumbnail
        {...thumbnailProps}
        size={thumbnailSize}
      />
      <Metadata
        {...metadataProps}
        orderPreset={metadataPreset}
        landscape={landscape}
      />

      {/*
      <Metadata
        {...metadataProps}
        withoutWrapper={false}
      >
        {Components => (
          <>
            <Components.starRate />
            <Components.publisher />
            <Components.authors />
          </>
        )}
      </Metadata>
      */}
    </Element>
  )
}

export {
  Book,
  Thumbnail,
  Metadata,
  PresetEnums as Presets,
}

export { dto2props } from './dto/toProps'

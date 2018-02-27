import * as React from 'react';
import classNames from 'classnames'

import {
  Book,
  RootComponents,
  ComponentProps,
} from './index'

export enum Templates {
  Portrait = 'Portrait',
  MetadataPortrait = 'MetadataPortrait',
  Landscape = 'Landscape',
}

export type PresetOptions = {
  thumbnailSize?: number
}

type templateFn = (Root: RootComponents, options: PresetOptions) => JSX.Element

const portrait: templateFn = ({ Thumbnail, Metadata }, options) => <>
  <Thumbnail.wrapper thumbnailSize={options.thumbnailSize}>
    <Thumbnail.coverImage />
    <Thumbnail.circleBadge />
    <Thumbnail.hdBadge />
    <Thumbnail.setBooklet />
  </Thumbnail.wrapper>
  <Metadata.wrapper>
    <Metadata.title />
    <Metadata.authors simple={true} />
  </Metadata.wrapper>
</>

const metadataPortrait: templateFn = ({ Thumbnail, Metadata }, options) => <>
  <Thumbnail.wrapper thumbnailSize={options.thumbnailSize}>
    <Thumbnail.coverImage />
    <Thumbnail.circleBadge />
    <Thumbnail.hdBadge />
    <Thumbnail.setBooklet />
  </Thumbnail.wrapper>
  <Metadata.wrapper>
    <Metadata.title key='title' />
    <Metadata.authors simple={true} key='authors' />
    <Metadata.publisher />
    <Metadata.price />
  </Metadata.wrapper>
</>

const landscape: templateFn = ({ Thumbnail, Metadata }, options) => <>
  <Thumbnail.wrapper thumbnailSize={options.thumbnailSize}>
    <Thumbnail.coverImage />
    <Thumbnail.circleBadge />
    <Thumbnail.hdBadge />
    <Thumbnail.setBooklet />
  </Thumbnail.wrapper>
  <Metadata.wrapper>
    <Metadata.title key='title' />
    <div className='RSGBookMetadata_Info'>
      <Metadata.authors simple={true} key='authors' />
      <Metadata.count key='count' />
      <Metadata.publisher />
    </div>
    <Metadata.description />
    <Metadata.price />
  </Metadata.wrapper>
</>

function preset (template: templateFn): React.SFC<ComponentProps & PresetOptions> {
  return (props: ComponentProps & PresetOptions) => {
    const {
      children,
      thumbnailSize,
      ...componentProps,
    } = props

    const options: PresetOptions = {
      thumbnailSize,
    }

    return (
      <Book {...componentProps}>
        {Root => typeof children === 'function'
          ? children(Root, template(Root, options))
          : template(Root, options)
        }
      </Book>
    )
  }
}

export const BookPresets: { [name in Templates]: React.SFC<ComponentProps & PresetOptions> } = {
  [Templates.Portrait]: preset(portrait),
  [Templates.MetadataPortrait]: preset(metadataPortrait),
  [Templates.Landscape]: preset(landscape),
}

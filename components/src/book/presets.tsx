import * as React from 'react';
import classNames from 'classnames'

import {
  Book,
  RootComponents,
  ComponentProps,
} from './index'

export enum Templates {
  Portrait = 'Portrait',
  MetadataLandscape = 'MetadataLandscape',
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

const metadataLandscape: templateFn = ({ Thumbnail, Metadata }, options) => <>
  <Thumbnail.wrapper thumbnailSize={options.thumbnailSize}>
    <Thumbnail.coverImage />
    <Thumbnail.circleBadge />
    <Thumbnail.hdBadge />
    <Thumbnail.setBooklet />
  </Thumbnail.wrapper>
  <Metadata.wrapper layout='landscape'>
    <Metadata.title key='title' />
    <Metadata.authors simple={true} key='authors' />
    <Metadata.publisher key="publisher" />
    <Metadata.price key="price" />
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
      <Metadata.publisher key="publisher" />
    </div>
    <Metadata.description key="description" />
    <Metadata.price key="price" />
  </Metadata.wrapper>
</>

function preset (template: templateFn, templateProps: any): React.SFC<ComponentProps & PresetOptions> {
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
      <Book {...componentProps} {...templateProps}>
        {Root => typeof children === 'function'
          ? children(Root, template(Root, options))
          : template(Root, options)
        }
      </Book>
    )
  }
}

export const BookPresets: { [name in Templates]: React.SFC<ComponentProps & PresetOptions> } = {
  [Templates.Portrait]: preset(portrait, {layout: 'portrait'}),
  [Templates.MetadataLandscape]: preset(metadataLandscape, {layout: 'landscape'}),
  [Templates.Landscape]: preset(landscape, {layout: 'landscape'}),
}

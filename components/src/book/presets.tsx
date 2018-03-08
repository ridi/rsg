import classNames from 'classnames';
import * as React from 'react';

import {
  Book,
  ComponentProps,
  RootComponents,
} from './index';

export enum Templates {
  Portrait = 'Portrait',
  MetadataLandscape = 'MetadataLandscape',
  Landscape = 'Landscape',
}

export interface PresetOptions {
  thumbnailSize: number;
}

type templateFn = (Root: RootComponents, options: PresetOptions) => JSX.Element;

const portrait: templateFn = ({ Thumbnail, Metadata }, options) => (
  <>
    <Thumbnail.wrapper thumbnailSize={options.thumbnailSize}>
      <Thumbnail.coverImage />
      <Thumbnail.circleBadge />
      <Thumbnail.hdBadge />
      <Thumbnail.setBooklet />
    </Thumbnail.wrapper>
    <Metadata.wrapper width={options.thumbnailSize}>
      <Metadata.title />
      <Metadata.authors simple={true} />
      <Metadata.starRate />
      <Metadata.price />
      <Metadata.bookTypeBadge />
      <Metadata.someDealBadge />
    </Metadata.wrapper>
  </>
);

const metadataLandscape: templateFn = ({ Thumbnail, Metadata }, options) => (
  <>
    <Thumbnail.wrapper thumbnailSize={options.thumbnailSize}>
      <Thumbnail.coverImage />
      <Thumbnail.circleBadge />
      <Thumbnail.hdBadge />
      <Thumbnail.setBooklet />
    </Thumbnail.wrapper>
    <Metadata.wrapper layout="landscape">
      <Metadata.title key="title" />
      <div className="RSGBookMetadata_Info" key="info">
        <Metadata.starRate />
        <Metadata.authors simple={true} key="authors" />
        <Metadata.count key="count" />
        <Metadata.publisher key="publisher" />
      </div>
      <Metadata.description key="description" />
      <Metadata.price key="price" />
      <Metadata.bookTypeBadge />
      <Metadata.someDealBadge />
    </Metadata.wrapper>
  </>
);

const landscape: templateFn = ({ Thumbnail, Metadata }, options) => (
  <>
    <Thumbnail.wrapper thumbnailSize={options.thumbnailSize}>
      <Thumbnail.coverImage />
      <Thumbnail.circleBadge />
      <Thumbnail.hdBadge />
      <Thumbnail.setBooklet />
    </Thumbnail.wrapper>
    <Metadata.wrapper key="metadatawrapper">
      <Metadata.title key="title" />
      <div className="RSGBookMetadata_Info" key="info">
        <Metadata.authors simple={true} key="authors" />
        <Metadata.count key="count" />
        <Metadata.publisher key="publisher" />
        <Metadata.starRate />
      </div>
      <Metadata.price key="price" />
      <Metadata.bookTypeBadge />
      <Metadata.someDealBadge />
    </Metadata.wrapper>
  </>
);

function preset(template: templateFn, templateProps: any): React.SFC<ComponentProps & PresetOptions> {
  return (props: ComponentProps & PresetOptions) => {
    const {
      children,
      thumbnailSize,
      ...componentProps,
    } = props;

    const options: PresetOptions = {
      thumbnailSize,
    };
    return (
      <Book {...componentProps} {...templateProps}>
        {(Root) => typeof children === 'function'
          ? children(Root, template(Root, options))
          : template(Root, options)
        }
      </Book>
    );
  };
}

export const BookPresets: { [name in Templates]: React.SFC<ComponentProps & PresetOptions> } = {
  [Templates.Portrait]: preset(portrait, {layout: 'portrait'}),
  [Templates.MetadataLandscape]: preset(metadataLandscape, {layout: 'landscape'}),
  [Templates.Landscape]: preset(landscape, {layout: 'landscape'}),
};

import classNames from 'classnames';
import * as React from 'react';

import {
  Book,
  ComponentProps,
  RootComponents,
} from './index';

type presetFn = (Root: RootComponents, options: PresetOptions) => JSX.Element;

const portrait: presetFn = ({ Thumbnail, Metadata }, options) => (
  <>
    <Thumbnail.wrapper key='Thumbnail.wrapper' thumbnailSize={options.thumbnailSize}>
      <Thumbnail.coverImage key='Thumbnail.coverImage' />
      <Thumbnail.circleBadge key='Thumbnail.circleBadge' />
      <Thumbnail.hdBadge key='Thumbnail.hdBadge' />
      <Thumbnail.setBooklet key='Thumbnail.setBooklet' />
    </Thumbnail.wrapper>
    <Metadata.wrapper key='Metadata.wrapper' width={options.thumbnailSize}>
      <Metadata.title key='Metadata.title' />
      <Metadata.authors key='Metadata.authors' simple={true} />
      <Metadata.starRate key='Metadata.starRate' />
      <Metadata.price key='Metadata.price' />
      <Metadata.bookTypeBadge key='Metadata.bookTypeBadge' />
      <Metadata.someDealBadge key='Metadata.someDealBadge' />
    </Metadata.wrapper>
  </>
);

const metadataLandscape: presetFn = ({ Thumbnail, Metadata }, options) => (
  <>
    <Thumbnail.wrapper key='Thumbnail.wrapper' thumbnailSize={options.thumbnailSize}>
      <Thumbnail.coverImage key='Thumbnail.coverImage' />
      <Thumbnail.circleBadge key='Thumbnail.circleBadge' />
      <Thumbnail.hdBadge key='Thumbnail.hdBadge' />
      <Thumbnail.setBooklet key='Thumbnail.setBooklet' />
    </Thumbnail.wrapper>
    <Metadata.wrapper key='Metadata.wrapper' layout='landscape'>
      <Metadata.title key='Metadata.title' />
      <div key='Metadata.info' className='RSGBookMetadata_Info'>
        <Metadata.starRate key='Metadata.starRate' />
        <Metadata.authors key='Metadata.authors' simple={true} />
        <Metadata.count key='Metadata.count' />
        <Metadata.publisher key='Metadata.publisher' />
      </div>
      <Metadata.description key='Metadata.description' />
      <Metadata.price key='Metadata.price' />
      <Metadata.bookTypeBadge key='Metadata.bookTypeBadge' />
      <Metadata.someDealBadge key='Metadata.someDealBadge' />
    </Metadata.wrapper>
  </>
);

const landscape: presetFn = ({ Thumbnail, Metadata }, options) => (
  <>
    <Thumbnail.wrapper key='Thumbnail.wrapper' thumbnailSize={options.thumbnailSize}>
      <Thumbnail.coverImage key='Thumbnail.coverImage' />
      <Thumbnail.circleBadge key='Thumbnail.circleBadge' />
      <Thumbnail.hdBadge key='Thumbnail.hdBadge' />
      <Thumbnail.setBooklet key='Thumbnail.setBooklet' />
    </Thumbnail.wrapper>
    <Metadata.wrapper key='Metadata.wrapper'>
      <Metadata.title key='Metadata.title' />
      <div className='RSGBookMetadata_Info'>
        <Metadata.authors key='Metadata.authors' simple={true} />
        <Metadata.count key='Metadata.count' />
        <Metadata.publisher key='Metadata.publisher' />
        <Metadata.starRate key='Metadata.starRate' />
      </div>
      <Metadata.price key='Metadata.price' />
      <Metadata.bookTypeBadge key='Metadata.bookTypeBadge' />
      <Metadata.someDealBadge key='Metadata.someDealBadge' />
    </Metadata.wrapper>
  </>
);

export interface PresetOptions {
  thumbnailSize: number;
}

function preset(fn: presetFn, props: Partial<ComponentProps>) {
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
      <Book {...componentProps} {...props}>
        {(Root) => typeof children === 'function'
          ? children(Root, fn(Root, options))
          : fn(Root, options)
        }
      </Book>
    );
  };
}

export const BookPresets: { [name: string]: React.SFC<ComponentProps & PresetOptions> } = {
  Portrait: preset(portrait, { layout: 'portrait' }),
  MetadataLandscape: preset(metadataLandscape, { layout: 'landscape' }),
  Landscape: preset(landscape, { layout: 'landscape' }),
};

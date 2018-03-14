import classNames from 'classnames';
import * as React from 'react';

import {
  Book,
  ComponentProps,
  RootComponents,
} from './index';

type presetFn = (Root: RootComponents, props: PresetProps) => JSX.Element;

const portrait: presetFn = ({ Thumbnail, Metadata }, props) => (
  <>
    <Thumbnail.wrapper key="Thumbnail.wrapper" thumbnailSize={props.thumbnailSize}>
      <Thumbnail.coverImage key="Thumbnail.coverImage" />
      <Thumbnail.circleBadge key="Thumbnail.circleBadge" />
      <Thumbnail.hdBadge key="Thumbnail.hdBadge" />
      <Thumbnail.setBooklet key="Thumbnail.setBooklet" />
    </Thumbnail.wrapper>
    <Metadata.wrapper key="Metadata.wrapper" width={props.thumbnailSize}>
      <Metadata.title key="Metadata.title" />
      <Metadata.authors key="Metadata.authors" simple={true} />
      <Metadata.starRate key="Metadata.starRate" />
      <Metadata.price key="Metadata.price" />
      <Metadata.bookTypeBadge key="Metadata.bookTypeBadge" />
      <Metadata.someDealBadge key="Metadata.someDealBadge" />
    </Metadata.wrapper>
  </>
);

const metadataLandscape: presetFn = ({ Thumbnail, Metadata }, props) => (
  <>
    <Thumbnail.wrapper key="Thumbnail.wrapper" thumbnailSize={props.thumbnailSize}>
      <Thumbnail.coverImage key="Thumbnail.coverImage" />
      <Thumbnail.circleBadge key="Thumbnail.circleBadge" />
      <Thumbnail.hdBadge key="Thumbnail.hdBadge" />
      <Thumbnail.setBooklet key="Thumbnail.setBooklet" />
    </Thumbnail.wrapper>
    <Metadata.wrapper key="Metadata.wrapper" layout="landscape">
      <Metadata.title key="Metadata.title" />
      <Metadata.subTitle key="Metadata.subTitle" />
      <div key="Metadata.info" className="RSGBookMetadata_Info">
        <Metadata.starRate key="Metadata.starRate" />
        <Metadata.authors key="Metadata.authors" simple={true} />
        <Metadata.SeriesCount key="Metadata.SeriesCount" />
        <Metadata.publisher key="Metadata.publisher" />
      </div>
      <Metadata.description key="Metadata.description" />
      <Metadata.price key="Metadata.price" />
      <Metadata.bookTypeBadge key="Metadata.bookTypeBadge" />
      <Metadata.someDealBadge key="Metadata.someDealBadge" />
    </Metadata.wrapper>
  </>
);

const landscape: presetFn = ({ Thumbnail, Metadata }, props) => (
  <>
    <Thumbnail.wrapper key="Thumbnail.wrapper" thumbnailSize={props.thumbnailSize}>
      <Thumbnail.coverImage key="Thumbnail.coverImage" />
      <Thumbnail.circleBadge key="Thumbnail.circleBadge" />
      <Thumbnail.hdBadge key="Thumbnail.hdBadge" />
      <Thumbnail.setBooklet key="Thumbnail.setBooklet" />
    </Thumbnail.wrapper>
    <Metadata.wrapper key="Metadata.wrapper">
      <Metadata.title key="Metadata.title" />
      <Metadata.subTitle key="Metadata.subTitle" />
      <div key="Metadata.info" className="RSGBookMetadata_Info">
        <Metadata.authors key="Metadata.authors" simple={true} />
        <Metadata.SeriesCount key="Metadata.SeriesCount" />
        <Metadata.publisher key="Metadata.publisher" />
        <Metadata.starRate key="Metadata.starRate" />
      </div>
      <Metadata.price key="Metadata.price" />
      <Metadata.bookTypeBadge key="Metadata.bookTypeBadge" />
      <Metadata.someDealBadge key="Metadata.someDealBadge" />
    </Metadata.wrapper>
  </>
);

export interface PresetProps {
  thumbnailSize: number;
}

export interface PresetOptions {
  layout: 'portrait' | 'landscape';
}

function preset(fn: presetFn, options: PresetOptions) {
  return (props: ComponentProps & PresetProps) => {
    const {
      children,
      thumbnailSize,
      ...componentProps,
    } = props;

    const presetProps: PresetProps = {
      thumbnailSize,
    };

    Object.assign(componentProps, {
      className: classNames(
        `RSGBook-layout-${options.layout}`,
        componentProps.className,
      ),
    });

    return (
      <Book {...componentProps}>
        {(Root) => typeof children === 'function'
          ? children(Root, fn(Root, presetProps))
          : fn(Root, presetProps)
        }
      </Book>
    );
  };
}

export const BookPresets: { [name: string]: React.SFC<ComponentProps & PresetProps> } = {
  Portrait: preset(portrait, { layout: 'portrait' }),
  MetadataLandscape: preset(metadataLandscape, { layout: 'landscape' }),
  Landscape: preset(landscape, { layout: 'landscape' }),
};

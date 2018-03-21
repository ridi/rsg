/* tslint:disable:interface-over-type-literal */

import classNames from 'classnames';
import * as React from 'react';

import { Book } from '../index';
import { Preset } from '../presets';

const Portrait: Preset = (props) => {
  const {
    className,
    thumbnailSize,
    ...componentProps,
  } = props;

  return (
    <Book
      {...componentProps}
      className={classNames('RSGBook-layout-portrait', className)}
    >
      {({ Thumbnail, Metadata }) => (
        <>
          <Thumbnail.wrapper key="Thumbnail.wrapper" thumbnailSize={thumbnailSize}>
            <Thumbnail.coverImage key="Thumbnail.coverImage" />
            <Thumbnail.circleBadge key="Thumbnail.circleBadge" />
            <Thumbnail.hdBadge key="Thumbnail.hdBadge" />
            <Thumbnail.setBooklet key="Thumbnail.setBooklet" />
          </Thumbnail.wrapper>
          <Metadata.wrapper key="Metadata.wrapper" width={thumbnailSize}>
            <Metadata.title key="Metadata.title" />
            <Metadata.authors key="Metadata.authors" simple={true} />
            <Metadata.starRate key="Metadata.starRate" />
            <Metadata.price key="Metadata.price" />
            <Metadata.bookTypeBadge key="Metadata.bookTypeBadge" />
            <Metadata.someDealBadge key="Metadata.someDealBadge" />
          </Metadata.wrapper>
        </>
      )}
    </Book>
  );
};

Portrait.displayName = 'Book.Portrait';

export default Portrait;

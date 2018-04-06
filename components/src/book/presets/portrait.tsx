import classNames from 'classnames';
import * as React from 'react';

import { Book } from '../index';
import { Preset } from './type';

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
      style={{ width: `${thumbnailSize}px` }}
    >
      {({ Thumbnail, Metadata }) => (
        <>
          <Thumbnail.wrapper thumbnailSize={thumbnailSize}>
            <Thumbnail.coverImage />
            <Thumbnail.adultOnlyBadge />
            <Thumbnail.circleBadge />
            <Thumbnail.hdBadge />
            <Thumbnail.setBooklet />
          </Thumbnail.wrapper>
          <Metadata.wrapper width={thumbnailSize}>
            <Metadata.title />
            <Metadata.authors simple={true} />
            <Metadata.starRate />
            <Metadata.price />
            <Metadata.bookTypeBadge />
            <Metadata.someDealBadge />
          </Metadata.wrapper>
        </>
      )}
    </Book>
  );
};

Portrait.displayName = 'Book.Portrait';

export default Portrait;

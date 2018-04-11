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
      className={classNames('RSGBook-preset-portrait', className)}
      style={{ width: `${thumbnailSize}px` }}
    >
      {({ Thumbnail, Metadata }) => (
        <>
          <Thumbnail.wrapper thumbnailSize={thumbnailSize}>
            <Thumbnail.coverImage required />
            <Thumbnail.adultOnlyBadge />
            <Thumbnail.circleBadge />
            <Thumbnail.hdBadge />
            <Thumbnail.setBooklet />
          </Thumbnail.wrapper>
          <Metadata.wrapper>
            <Metadata.title required />
            <Metadata.authors simple={true} required />
            <Metadata.starRate hideUnit={thumbnailSize <= 80}/>
            <Metadata.price hideSeries={true} />
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

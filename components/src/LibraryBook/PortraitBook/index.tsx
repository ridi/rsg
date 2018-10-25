import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';

export interface PortraitBookProps extends LibraryBook.ThumbnailProps {
  className?: string;
  [extraKey: string]: any;
}

export const PortraitBook: React.SFC<PortraitBookProps> = (props) => {
  const {
    className,
    bookId,
    thumbnailUrl,
    title,
    author,
    ...extraProps
  } = props;

  return (
    <div
      className={classNames(['PortraitBook', className])}
      { ...extraProps }
    >
      <div className="PortraitBook_Thumbnail">
        <LibraryBook.Thumbnail
          viewType={LibraryBook.VIEW_TYPE.Portrait}
          bookId={bookId}
          thumbnailUrl={ thumbnailUrl }
          title={ title }
        />
      </div>
      <div className="PortraitBook_Metadata">
        <LibraryBook.Title title={ title }/>
        <LibraryBook.Author author={ author }/>
      </div>
    </div>
  );
};

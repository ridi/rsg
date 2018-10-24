import * as React from 'react';
import * as LibraryBook from '../';

// export interface PortraitBookProps extends LibraryBook.ThumbnailProps {}

export const PortraitBook: React.SFC<LibraryBook.ThumbnailProps> = (props) => {
  const {
    bookId,
    thumbnailUrl,
    title,
    author,
    downloadSize,
  } = props;
  return (
    <div className="PortraitBook">
      <div className="PortraitBook_Thumbnail">
        <LibraryBook.Thumbnail
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

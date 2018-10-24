import * as React from 'react';
import * as LibraryBook from '../';

// export interface LandscapeBookProps extends LibraryBook.ThumbnailProps {}

export const LandscapeBook: React.SFC<LibraryBook.ThumbnailProps> = (props) => {
  const {
    bookId,
    thumbnailUrl,
    title,
    author,
    downloadSize,
  } = props;
  return (
    <div className="LandscapeBook">
      <div className="LandscapeBook_Thumbnail">
        <LibraryBook.Thumbnail
          bookId={bookId}
          thumbnailUrl={ thumbnailUrl }
          title={ title }
        />
      </div>
      <div className="LandscapeBook_Metadata">
        <LibraryBook.Title title={ title }/>
        <LibraryBook.Author author={ author }/>
      </div>
      <div className="LandscapeBook_Buttons">
        <LibraryBook.DownloadButton />
        <LibraryBook.DownloadSize downloadSize={ downloadSize }/>
      </div>
    </div>
  );
};

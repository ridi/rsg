import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';

export interface LandscapeBookProps extends LibraryBook.ThumbnailProps {
  className?: string;
  [extraKey: string]: any;
}

export const LandscapeBook: React.SFC<LandscapeBookProps> = (props) => {
  const {
    className,
    bookId,
    thumbnailUrl,
    title,
    author,
    downloadSize,
    ...extraProps
  } = props;

  return (
    <div
      className={classNames(['LandscapeBook', className])}
      { ...extraProps }
    >
      <div className="LandscapeBook_Thumbnail">
        <LibraryBook.Thumbnail
          viewType={LibraryBook.VIEW_TYPE.Landscape}
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
        { downloadSize && <LibraryBook.DownloadSize downloadSize={ downloadSize }/> }
      </div>
    </div>
  );
};

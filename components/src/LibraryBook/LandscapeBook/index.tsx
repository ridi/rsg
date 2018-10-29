import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';

export interface LandscapeBookProps extends
  LibraryBook.ThumbnailProps,
  LibraryBook.AuthorProps,
  LibraryBook.TitleProps {
    className?: string;
    [extraKey: string]: any;
  }

export const LandscapeBook: React.SFC<LandscapeBookProps> = (props) => {
  const {
    selectMode,
    selected,
    onSelected,
    bookCount,
    bookCountUnit,
    bookCountWrapper,
    readingProgress,
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
      {...extraProps}
    >
      <div className="LandscapeBook_Thumbnail">
        <LibraryBook.Thumbnail
          viewType={LibraryBook.VIEW_TYPE.Landscape}
          bookId={bookId}
          thumbnailUrl={ thumbnailUrl }
          selectMode={selectMode}
          selected={selected}
          onSelected={() => {onSelected(); }}
          bookCount={bookCount}
          bookCountUnit={bookCountUnit}
          bookCountWrapper={bookCountWrapper}
          readingProgress={readingProgress}
        />
      </div>
      <div className="LandscapeBook_Metadata">
        {title && <LibraryBook.Title title={title}/>}
        {author && <LibraryBook.Author author={author}/>}
      </div>
      <div className="LandscapeBook_Buttons">
        <LibraryBook.DownloadButton />
        {downloadSize && <LibraryBook.DownloadSize downloadSize={ downloadSize }/>}
      </div>
    </div>
  );
};

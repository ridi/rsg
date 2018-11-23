import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';

export interface PortraitBookProps extends
  LibraryBook.ThumbnailProps,
  LibraryBook.AuthorProps,
  LibraryBook.TitleProps {
    className?: string;
    [extraKey: string]: any;
  }

export const PortraitBook: React.SFC<PortraitBookProps> = (props) => {
  const {
    adultBadge,
    updateBadge,
    selectMode,
    selected,
    onSelected,
    bookCount,
    bookCountUnit,
    bookCountWrapper,
    readingStatus,
    readingProgress,
    className,
    bookId,
    thumbnailUrl,
    thumbnailWidth,
    title,
    author,
    expired = false,
    expiredAt,
    ridiselect,
    unitBook = false,
    notAvailable = false,
    downloadStatus,
    downloadProgress,
    ...extraProps
  } = props;

  return (
    <div
      className={classNames(['PortraitBook', className])}
      {...extraProps}
    >
      <div className="PortraitBook_Thumbnail">
        <LibraryBook.Thumbnail
          viewType={LibraryBook.VIEW_TYPE.Portrait}
          adultBadge={adultBadge}
          updateBadge={updateBadge}
          bookId={bookId}
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          selectMode={selectMode}
          selected={selected}
          onSelected={(e) => {onSelected(e); }}
          unitBook={unitBook}
          notAvailable={notAvailable}
          bookCount={bookCount}
          bookCountUnit={bookCountUnit}
          bookCountWrapper={bookCountWrapper}
          readingProgress={readingProgress}
          downloadStatus={downloadStatus}
          downloadProgress={downloadProgress}
        />
      </div>
      <div className="PortraitBook_Metadata">
        {title && <LibraryBook.Title title={title}/>}
        {author && <LibraryBook.Author author={author}/>}
      </div>
    </div>
  );
};

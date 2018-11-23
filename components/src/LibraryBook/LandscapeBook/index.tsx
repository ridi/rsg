import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';

export interface LandscapeBookProps extends
  LibraryBook.ThumbnailProps,
  LibraryBook.AuthorProps,
  LibraryBook.AnnotationsProps,
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
    readingStatus,
    readingProgress,
    annotations = {
      bookMarkCount: 0,
      highlightCount: 0,
      memoCount: 0,
    },
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
    downloadSize,
    downloadStatus,
    downloadProgress,
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
          thumbnailUrl={thumbnailUrl}
          thumbnailWidth={thumbnailWidth}
          selectMode={selectMode}
          selected={selected}
          onSelected={(e) => {onSelected(e); }}
          bookCount={bookCount}
          bookCountUnit={bookCountUnit}
          bookCountWrapper={bookCountWrapper}
          readingStatus={readingStatus}
        />
      </div>
      <div className="LandscapeBook_Metadata">
        {title && <LibraryBook.Title title={title}/>}
        {author && <LibraryBook.Author author={author}/>}
        {ridiselect ? (
          <LibraryBook.Ridiselect />
        ) : expired ? (
          <LibraryBook.Expired />
        ) : expiredAt ? (
          <LibraryBook.ExpiredAt expiredAt={expiredAt} />
        ) : null}
      </div>
      <div className="LandscapeBook_Buttons">
        {unitBook ? (
          downloadStatus === LibraryBook.DOWNLOAD_STATUS.Downloading ? (
            <LibraryBook.UnitBookDownloading />
          ) : (
            bookCount ? (
              <LibraryBook.UnitBookCount
                bookCount={bookCount}
                bookCountUnit={bookCountUnit}
                bookCountWrapper={bookCountWrapper}
              />
            ) : null
          )
        ) : (
          readingStatus === LibraryBook.READING_STATUS.Opened ? (
            <>
              <LibraryBook.ReadingProgressBar readingProgress={readingProgress} />
              <LibraryBook.Annotations annotations={annotations} />
            </>
          ) : (
            !notAvailable ? (
              <>
                <LibraryBook.DownloadButton
                  downloadStatus={downloadStatus}
                  downloadProgress={downloadProgress}
                  downloadSize={downloadSize}
                />
              </>
            ) : null
          )
        )}
      </div>
    </div>
  );
};

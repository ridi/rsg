import classNames from 'classnames';
import * as React from 'react';
import * as LibraryBook from '../';

export interface ThumbnailProps extends
  LibraryBook.ThumbnailImageProps,
  LibraryBook.SelectProps,
  LibraryBook.BookCountProps,
  LibraryBook.DownloadStatusProps,
  LibraryBook.ReadingStatusProps {
    bookId: string;
    viewType?: LibraryBook.VIEW_TYPE;
    className?: string;
    available?: boolean;
    unitBook?: boolean;
    expiredAt?: string;
    ridiSelect?: boolean;
    adultBadge?: boolean;
    updateBadge?: boolean;
    children?: React.ReactNode;
    [extraKey: string]: any;
  }

export const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  const {
    className,
    viewType = LibraryBook.VIEW_TYPE.Portrait,
    thumbnailUrl,
    adultBadge = false,
    updateBadge = false,
    available = true,
    unitBook = false,
    expiredAt,
    ridiSelect,
    bookCount,
    bookCountUnit = LibraryBook.BOOK_COUNT_UNIT.Single,
    editMode = false,
    selected = false,
    readingStatus,
    readingProgress,
    downloadStatus,
    downloadProgress,
    children,
    ...extraProps
  } = props;

  return (
    <div
      className={classNames(['Thumbnail', className])}
      { ...extraProps }
    >
      { editMode && <LibraryBook.Checkbox /> }
      { readingStatus && <>
        { readingStatus === LibraryBook.READING_STATUS.New && <LibraryBook.UnReadDot /> }
        { readingStatus === LibraryBook.READING_STATUS.Opened && viewType === LibraryBook.VIEW_TYPE.Portrait &&
          <LibraryBook.ReadingProgressBar readingProgress={readingProgress} />
        }
      </> }
      <LibraryBook.ThumbnailImage
        thumbnailUrl={ thumbnailUrl }
      />
      { adultBadge && <LibraryBook.AdultBadge /> }
      { updateBadge && <LibraryBook.UpdateBadge /> }
      { viewType === LibraryBook.VIEW_TYPE.Portrait &&
        <div>
          { unitBook && <>
            { bookCount &&
              <LibraryBook.UnitLinkButton
                bookCount={bookCount}
                bookCountUnit={bookCountUnit}
              />
            }
            { downloadStatus === LibraryBook.DOWNLOAD_STATUS.Downloading &&
              <LibraryBook.UnitBookDownloading/>
            }
          </> }
          { !unitBook && <>
            { available &&
              <LibraryBook.DownloadButton
                downloadStatus={downloadStatus}
                downloadProgress={downloadProgress}
              />
            }
            { ridiSelect && <LibraryBook.Ridiselect /> }
            { !ridiSelect && !available && <LibraryBook.Expired /> }
            { !ridiSelect && available && expiredAt && <LibraryBook.ExpiredAt expiredAt={ expiredAt } /> }
          </> }
        </div>
      }
      { children }
      { !available && <LibraryBook.NotAvailable /> }
    </div>
  );
};

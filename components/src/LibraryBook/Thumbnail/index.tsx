import * as React from 'react';
import * as LibraryBook from '../Elements';

export interface ThumbnailProps extends
  LibraryBook.ThumbnailImageProps,
  LibraryBook.SelectProps,
  LibraryBook.BookCountProps,
  LibraryBook.DownloadStatusProps,
  LibraryBook.ReadingStatusProps {
    available?: boolean;
    unitBook?: boolean;
    expiredAt?: string;
    ridiSelect?: boolean;
    adultBadge?: boolean;
    updateBadge?: boolean;
    bookId: string;
    children?: React.ReactNode;
    [extraKey: string]: any;
  }

export const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  const {
    viewType = LibraryBook.VIEW_TYPE.Portrait,
    thumbnailUrl,
    title,
    thumbnailSize = 60,
    adultBadge = false,
    updateBadge = false,
    available = true,
    unitBook = false,
    expiredAt,
    ridiSelect,
    bookCount,
    bookCountUnit,
    editMode = false,
    selected = false,
    readingStatus,
    readingProgress,
    downloadStatus,
    downloadProgress,
    children,
    ...extraProps,
  } = props;

  return (
    <div
      className="Thumbnail"
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
        title={ title }
      />
      { adultBadge && <LibraryBook.AdultBadge /> }
      { updateBadge && <LibraryBook.UpdateBadge /> }
      { viewType === LibraryBook.VIEW_TYPE.Portrait &&
        <div>
          { unitBook && <>
            <LibraryBook.UnitLinkButton
              bookCount={bookCount}
              bookCountUnit={bookCountUnit}
            />
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

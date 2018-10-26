import classNames from 'classnames';
import * as React from 'react';
import {
  AdultBadge,
  BOOK_COUNT_UNIT,
  BookCountProps,
  Checkbox,
  DOWNLOAD_STATUS,
  DownloadButton,
  DownloadStatusProps,
  Expired,
  ExpiredAt,
  NotAvailable,
  READING_STATUS,
  ReadingProgressBar,
  ReadingStatusProps,
  Ridiselect,
  SelectProps,
  ThumbnailImage,
  ThumbnailImageProps,
  UnitBookCount,
  UnitBookDownloading,
  UnReadDot,
  UpdateBadge,
  VIEW_TYPE,
} from '../';

export interface ThumbnailProps extends
  ThumbnailImageProps,
  SelectProps,
  BookCountProps,
  DownloadStatusProps,
  ReadingStatusProps {
    bookId: string;
    viewType?: VIEW_TYPE;
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
    viewType = VIEW_TYPE.Portrait,
    thumbnailUrl,
    adultBadge = false,
    updateBadge = false,
    available = true,
    unitBook = false,
    expiredAt,
    ridiSelect,
    bookCount,
    bookCountUnit = BOOK_COUNT_UNIT.Single,
    bookCountWrapper,
    bookCountLinkUrl,
    selectMode = false,
    selected = false,
    readingStatus,
    readingProgress,
    downloadStatus,
    downloadProgress,
    children,
    onSelected,
    ...extraProps
  } = props;

  return (
    <div
      className={classNames(['Thumbnail', className])}
      {...extraProps}
    >
      {selectMode &&
        <Checkbox
          selectMode={selectMode}
          selected={selected}
          onSelected={() => {onSelected(); }}
        />
      }
      {readingStatus && <>
        {readingStatus === READING_STATUS.New && <UnReadDot />}
        {readingStatus === READING_STATUS.Opened
          && viewType === VIEW_TYPE.Portrait
          && <ReadingProgressBar readingProgress={readingProgress} />}
      </>}
      <ThumbnailImage thumbnailUrl={thumbnailUrl} />
      {adultBadge && <AdultBadge />}
      {updateBadge && <UpdateBadge />}
      {viewType === VIEW_TYPE.Portrait &&
        <div>
          {unitBook ? (
            <>
              {bookCount &&
                <UnitBookCount
                  bookCount={bookCount}
                  bookCountUnit={bookCountUnit}
                  bookCountWrapper={bookCountWrapper}
                />
              }
              {downloadStatus === DOWNLOAD_STATUS.Downloading && <UnitBookDownloading />}
            </>
          ) : (
            <>
              {available &&
                <DownloadButton
                  downloadStatus={downloadStatus}
                  downloadProgress={downloadProgress}
                />
              }
              {ridiSelect ? (
                <Ridiselect />
              ) : !available ? (
                <Expired />
              ) : expiredAt ? (
                <ExpiredAt expiredAt={expiredAt} />
              ) : null}
            </>
          )}
        </div>
      }
      {children}
      {!available && <NotAvailable />}
    </div>
  );
};

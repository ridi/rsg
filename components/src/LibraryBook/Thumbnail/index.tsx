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
    adultBadge?: boolean;
    notAvailable?: boolean;
    bookId: string;
    children?: React.ReactNode;
    className?: string;
    expired?: boolean;
    expiredAt?: string;
    ridiSelect?: boolean;
    unitBook?: boolean;
    updateBadge?: boolean;
    viewType?: VIEW_TYPE;
    [extraKey: string]: any;
  }

export const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  const {
    className,
    viewType = VIEW_TYPE.Portrait,
    thumbnailUrl,
    adultBadge = false,
    updateBadge = false,
    notAvailable = false,
    unitBook = false,
    expired = false,
    expiredAt,
    ridiselect,
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
      {readingStatus && <>
        {readingStatus === READING_STATUS.New ? (
          <UnReadDot />
        ) : readingStatus === READING_STATUS.Opened && viewType === VIEW_TYPE.Portrait ? (
          <ReadingProgressBar readingProgress={readingProgress} />
        ) : null}
      </>}
      <div className="Thumbnail_ThumbnailImageWrapper">
        {selectMode &&
          <Checkbox
            selectMode={selectMode}
            selected={selected}
            onSelected={(e) => {onSelected(e); }}
          />
        }
        <ThumbnailImage thumbnailUrl={thumbnailUrl} />
        {adultBadge && <AdultBadge />}
        {updateBadge && <UpdateBadge />}
        {viewType === VIEW_TYPE.Portrait &&
          <>
            {unitBook ? (
              <>
                {bookCount &&
                  <UnitBookCount
                    bookCount={bookCount}
                    bookCountUnit={bookCountUnit}
                    bookCountWrapper={bookCountWrapper}
                  />
                }
                {downloadStatus === DOWNLOAD_STATUS.Downloading && <UnitBookDownloading size="large" />}
              </>
            ) : (
              <>
                {!notAvailable &&
                  <DownloadButton
                    size="large"
                    downloadStatus={downloadStatus}
                    downloadProgress={downloadProgress}
                  />
                }
                {ridiselect ? (
                  <Ridiselect />
                ) : expired ? (
                  <Expired />
                ) : expiredAt ? (
                  <ExpiredAt expiredAt={expiredAt} />
                ) : null}
              </>
            )}
          </>
        }
        {children}
        {notAvailable && <NotAvailable />}
      </div>
    </div>
  );
};

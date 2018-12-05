import classNames from 'classnames';
import * as React from 'react';
import {
  AdultBadge,
  BookCountProps,
  BookCountUnit,
  Checkbox,
  DownloadButton,
  DownloadStatus,
  DownloadStatusProps,
  Expired,
  ExpiredAt,
  NotAvailable,
  ReadingProgressBar,
  ReadingProgressBarProps,
  ReadingStatus,
  Ridiselect,
  ThumbnailImage,
  ThumbnailImageProps,
  UnitBookCount,
  UnitBookDownloading,
  UnReadDot,
  UpdateBadge,
  ViewType,
} from '../';

export interface ThumbnailProps extends
  BookCountProps,
  DownloadStatusProps,
  ReadingProgressBarProps,
  ThumbnailImageProps {
    adultBadge?: boolean;
    children?: React.ReactNode;
    className?: string;
    expired?: boolean;
    expiredAt?: string;
    notAvailable?: boolean;
    onSelectedChange?: (e: React.SyntheticEvent<any>) => void;
    readingStatus?: ReadingStatus;
    ridiSelect?: boolean;
    selected?: boolean;
    selectMode?: boolean;
    unitBook?: boolean;
    updateBadge?: boolean;
    viewType?: ViewType;
    thumbnailWidth?: number;
    [extraKey: string]: any;
  }

export const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  const {
    adultBadge = false,
    bookCount = 0,
    bookCountLinkUrl,
    bookCountUnit = BookCountUnit.Single,
    bookCountWrapper,
    children,
    className,
    downloadProgress,
    downloadStatus,
    expired = false,
    expiredAt,
    notAvailable = false,
    onSelectedChange,
    readingProgress,
    readingStatus,
    ridiselect,
    selected = false,
    selectMode = false,
    thumbnailUrl,
    thumbnailWidth,
    unitBook = false,
    updateBadge = false,
    viewType = ViewType.Portrait,
    ...extraProps
  } = props;
  const width = { width: `${thumbnailWidth}px` };

  return (
    <div
      className={classNames(['Thumbnail', className])}
      style={thumbnailWidth ? width : {}}
      {...extraProps}
    >
      {readingStatus && <>
        {readingStatus === ReadingStatus.New ? (
          <UnReadDot />
        ) : readingStatus === ReadingStatus.Opened && viewType === ViewType.Portrait ? (
          <ReadingProgressBar readingProgress={readingProgress} />
        ) : null}
      </>}
      <div className="Thumbnail_ThumbnailImageWrapper">
        {selectMode &&
          <Checkbox
            onChange={onSelectedChange}
            checked={selected}
          />
        }
        <ThumbnailImage thumbnailUrl={thumbnailUrl} />
        {adultBadge && <AdultBadge />}
        {updateBadge && <UpdateBadge />}
        {viewType === ViewType.Portrait &&
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
                {downloadStatus === DownloadStatus.Downloading && <UnitBookDownloading size="large" />}
              </>
            ) : (
              <>
                {!notAvailable &&
                  <DownloadButton
                    downloadStatus={downloadStatus}
                    downloadProgress={downloadProgress}
                    size="large"
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

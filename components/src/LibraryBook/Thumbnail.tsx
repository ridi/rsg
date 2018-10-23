import * as React from 'react';

import {
  // enum
  AdditionalInfoProps,
  AdultBadge,
  BadgeProps,
  // interface
  BookCountProps,
  Checkbox,
  DOWNLOAD_STATUS,
  DownloadButton,
  DownloadStatusProps,
  Expired,
  ExpiredAt,
  NotAvailable,
  // components
  READING_STATUS,
  ReadingProgressBar,
  ReadingStatusProps,
  Ridiselect,
  SelectProps,
  ThumbnailImage,
  ThumbnailImageProps,
  UnitBookDownloadingProgressCircle,
  UnitLinkButton,
  UnReadDot,
  UpdateBadge,
  VIEW_TYPE,
  ViewTypeProp,
} from './components';

export interface ThumbnailProps extends
  ViewTypeProp,
  ThumbnailImageProps,
  BadgeProps,
  SelectProps,
  BookCountProps,
  AdditionalInfoProps,
  DownloadStatusProps,
  ReadingStatusProps {
    bookId: string;
    children?: React.ReactNode;
    [extraKey: string]: any;
  }

export const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  const {
    viewType = VIEW_TYPE.Portrait,
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
      { ...extraProps }
    >
      { editMode && <Checkbox /> }
      { readingStatus && <>
        { readingStatus === READING_STATUS.New && <UnReadDot /> }
        { readingStatus === READING_STATUS.Opened && viewType === VIEW_TYPE.Portrait &&
          <ReadingProgressBar readingProgress={readingProgress} />
        }
      </> }
      <ThumbnailImage
        thumbnailUrl={ thumbnailUrl }
        title={ title }
      />
      { adultBadge && <AdultBadge /> }
      { updateBadge && <UpdateBadge /> }
      { viewType === VIEW_TYPE.Portrait &&
        <div>
          { unitBook && <>
            <UnitLinkButton
              bookCount={bookCount}
              bookCountUnit={bookCountUnit}
            />
            { downloadStatus === DOWNLOAD_STATUS.Downloading &&
              <UnitBookDownloadingProgressCircle/>
            }
          </> }
          { !unitBook && <>
            { available &&
              <DownloadButton
                downloadStatus={downloadStatus}
                downloadProgress={downloadProgress}
              />
            }
            { ridiSelect && <Ridiselect /> }
            { !ridiSelect && !available && <Expired /> }
            { !ridiSelect && available && expiredAt && <ExpiredAt expiredAt={ expiredAt } /> }
          </> }
        </div>
      }
      { children }
      { !available && <NotAvailable /> }
    </div>
  );
};

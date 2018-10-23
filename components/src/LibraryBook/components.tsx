import classNames from 'classnames';
import * as React from 'react';

export enum VIEW_TYPE {
  Portrait = 'portrait',
  Landscape = 'landscape',
}

export enum DOWNLOAD_STATUS {
  Downloadable = 'downloadable',
  Wating = 'wating',
  Downloading = 'downloading',
  Downloaded = 'downloaded',
}

export enum READING_STATUS {
  New = 'new',
  Opened = 'opened',
}

export enum BOOK_COUNT_UNIT {
  Single = '권',
  Serial = '화',
}

export interface ViewTypeProp {
  viewType?: VIEW_TYPE;
}

export interface ThumbnailImageProps {
  thumbnailUrl: string;
  thumbnailSize?: number;
  title: string;
}

export interface BadgeProps {
  adultBadge?: boolean;
  updateBadge?: boolean;
}

export interface SelectProps {
  editMode?: boolean;
  selected?: boolean;
  onSelected: () => void;
}

export interface AdditionalInfoProps {
  available?: boolean;
  unitBook?: boolean;
  expiredAt?: string;
  ridiSelect?: boolean;
}

export interface BookCountProps {
  bookCount?: number;
  bookCountUnit?: BOOK_COUNT_UNIT;
}

export interface DownloadStatusProps {
  downloadStatus?: DOWNLOAD_STATUS;
  downloadProgress?: number;
  downloadSize?: number;
  onStartDownload?: () => void;
  onStopDownload?: () => void;
}

export interface ReadingStatusProps {
  readingStatus?: READING_STATUS;
  readingProgress?: number;
}

export interface AnnotationsProps {
  BookMarkCount: number;
  HighlightCount: number;
  MemoCount: number;
}

// Thumbnail 전용
export const Checkbox: React.SFC = () => (
  <label><input type="checkbox"/>선택</label>
);

export const ThumbnailImage: React.SFC<ThumbnailImageProps> = (props) => (
  <img src={props.thumbnailUrl} alt={props.title} />
);

export const AdultBadge: React.SFC = () => (
  <p>19세 미만 구독불가</p>
);

export const UpdateBadge: React.SFC = () => (
  <p>신규 업데이트</p>
);

export const NotAvailable: React.SFC = () => (
  <p>이용불가</p>
);

export const UnReadDot: React.SFC = () => (
  <p>아직 읽지 않은 책</p>
);

// Metadata 전용
export const Title: React.SFC<{ title: string }> = (props) => (
  <p>{ props.title }</p>
);

export const Author: React.SFC<{ author: string }> = (props) => (
  <p>{ props.author }</p>
);

// Button 전용
export const DownloadSize: React.SFC<{ downloadSize: number }> = (props) => (
  <p>{ props.downloadSize }MB</p>
);

export const Annotations: React.SFC<{ annotations: AnnotationsProps }> = (props) => (
  <ul>
    <li>북마크: { props.annotations.BookMarkCount }</li>
    <li>형광펜: { props.annotations.HighlightCount }</li>
    <li>메모: { props.annotations.MemoCount }</li>
  </ul>
);

// Thumbnail, Metadata 공용
export const Ridiselect: React.SFC = () => (
  <p>리디셀렉트</p>
);

export const Expired: React.SFC = () => (
  <p>기간 만료</p>
);

export const ExpiredAt: React.SFC<AdditionalInfoProps> = (props) => (
  <p>{ props.expiredAt }</p>
);

// Thumbnail, Button 공용
export const UnitLinkButton: React.SFC<BookCountProps> = (props) => (
  <p>총 { props.bookCount }{ props.bookCountUnit }</p>
);

export const DownloadButton: React.SFC<DownloadStatusProps> = (props) => (
  <>
    { props.downloadStatus === DOWNLOAD_STATUS.Downloadable &&
      <>다운로드 버튼</>
    }
    { props.downloadStatus === DOWNLOAD_STATUS.Wating &&
      <>다운로드 대기중</>
    }
    { props.downloadStatus === DOWNLOAD_STATUS.Downloading &&
      <>{ props.downloadProgress }% 다운로드, 다운로드 정지 버튼</>
    }
    { props.downloadStatus === DOWNLOAD_STATUS.Downloaded &&
      <></>
    }
  </>
);

export const UnitBookDownloadingProgressCircle: React.SFC = () => (
  <p>유닛도서 다운로드 중</p>
);

export const ReadingProgressBar: React.SFC<ReadingStatusProps> = (props) => (
  <p>독서진행률 { props.readingProgress }%</p>
);

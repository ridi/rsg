import {Icon} from '@ridi/rsg';
import {BookComponentProps, BookState} from '@ridi/rsg/components/src/book';
import * as React from 'react';

export enum DOWNLOAD_STATUS {
  Downloadable = 'downloadable',
  Wating = 'wating',
  Downloading = 'downloading',
  Downloaded = 'downloaded',
}

export interface DownloadStatusProps {
  downloadStatus?: DOWNLOAD_STATUS;
  downloadProgress?: number;
  onStartDownload?: () => void;
  onStopDownload?: () => void;
}

export const DownloadButton: React.SFC<DownloadStatusProps> = ({ downloadStatus, downloadProgress }) => {
  switch (downloadStatus) {
    case DOWNLOAD_STATUS.Downloadable:
      return (
        <button>
          <span>다운로드 버튼</span>
          <Icon name="btn_downloadable"/>
        </button>
      );
    case DOWNLOAD_STATUS.Wating:
      return (
        <button>
          <span>다운로드 대기중</span>
          <Icon name="btn_waiting"/>
        </button>
      );
    case DOWNLOAD_STATUS.Downloading:
      const deg = Math.min(360, Math.max(0, (downloadProgress / 100) * 360)) / 2;
      const style = { transform: `rotate(${deg}deg)` };
      return (
        <button className="DownloadButton-downloading">
          <span>{downloadProgress}% 다운로드</span>
          <div className="mask"><div className="fill" style={style} /></div>
          <div className="mask" style={style}><div className="fill" style={style} /></div>
          <div className="stop"/>
        </button>
      );
    default: return null;
  }
};

import {Icon} from '@ridi/rsg';
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
  size ?: 'small' | 'large';
  onStartDownload?: () => void;
  onStopDownload?: () => void;
}

export const DownloadButton: React.SFC<DownloadStatusProps> = ({
  downloadStatus,
  downloadProgress,
  size = 'small',
}) => {
  switch (downloadStatus) {
    case DOWNLOAD_STATUS.Downloadable:
      return (
        <div className="DownloadButton_Wrapper">
          <button className={`DownloadButton DownloadButton-size-${size} DownloadButton-downloadable`}>
            <Icon className="Downloadable_icon" name="btn_downloadable"/>
          </button>
        </div>
      );
    case DOWNLOAD_STATUS.Wating:
      return (
        <div className="DownloadButton_Wrapper DownloadButton_Wrapper-blocked">
          <button className={`DownloadButton DownloadButton-size-${size} DownloadButton-waiting`}>
            <Icon className="Waiting_icon" name="btn_waiting"/>
          </button>
        </div>
      );
    case DOWNLOAD_STATUS.Downloading:
      const deg = Math.min(360, Math.max(0, (downloadProgress / 100) * 360)) / 2;
      const style = { transform: `rotate(${deg}deg)` };
      return (
        <div className="DownloadButton_Wrapper DownloadButton_Wrapper-blocked">
          <button className={`DownloadButton DownloadButton-size-${size} DownloadButton-downloading`}>
            <div className="mask"><div className="fill" style={style} /></div>
            <div className="mask" style={style}><div className="fill" style={style} /></div>
            <div className="stop"/>
          </button>
        </div>
      );
    default: return null;
  }
};

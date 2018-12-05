import {Icon} from '@ridi/rsg';
import * as React from 'react';

export enum DownloadStatus {
  Downloadable = 'downloadable',
  Wating = 'wating',
  Downloading = 'downloading',
  Downloaded = 'downloaded',
}

export interface DownloadStatusProps {
  downloadSize?: number;
  downloadStatus?: DownloadStatus;
  downloadProgress?: number;
  size ?: 'small' | 'large';
  onStartDownload?: () => void;
  onStopDownload?: () => void;
}

export const DownloadButton: React.SFC<DownloadStatusProps> = ({
  downloadSize,
  downloadStatus,
  downloadProgress,
  size = 'small',
}) => {
  switch (downloadStatus) {
    case DownloadStatus.Downloadable:
      return (
        <div className="DownloadButton_Wrapper">
          <button className={`DownloadButton DownloadButton-size-${size} DownloadButton-downloadable`}>
            <Icon className="Downloadable_icon" name="btn_downloadable"/>
          </button>
          {downloadSize && <p className="DownloadSize">{downloadSize}MB</p>}
        </div>
      );
    case DownloadStatus.Wating:
      return (
        <div className="DownloadButton_Wrapper DownloadButton_Wrapper-blocked">
          <button className={`DownloadButton DownloadButton-size-${size} DownloadButton-waiting`}>
            <Icon className="Waiting_icon" name="btn_waiting"/>
          </button>
          {downloadSize && <p className="DownloadSize">{downloadSize}MB</p>}
        </div>
      );
    case DownloadStatus.Downloading:
      const deg = Math.min(360, Math.max(0, (downloadProgress / 100) * 360)) / 2;
      const style = { transform: `rotate(${deg}deg)` };
      return (
        <div className="DownloadButton_Wrapper DownloadButton_Wrapper-blocked">
          <button className={`DownloadButton DownloadButton-size-${size} DownloadButton-downloading`}>
            <div className="mask"><div className="fill" style={style} /></div>
            <div className="mask" style={style}><div className="fill" style={style} /></div>
            <div className="stop"/>
          </button>
          {downloadSize && <p className="DownloadSize">{downloadSize}MB</p>}
        </div>
      );
    default: return null;
  }
};

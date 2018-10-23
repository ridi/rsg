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
  downloadSize?: number;
  onStartDownload?: () => void;
  onStopDownload?: () => void;
}

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

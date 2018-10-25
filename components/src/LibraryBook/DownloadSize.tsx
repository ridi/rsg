import * as React from 'react';

export interface DownloadSizeProps {
  downloadSize: number;
}

export const DownloadSize: React.SFC<DownloadSizeProps> = (props) => (
  <p>{props.downloadSize}MB</p>
);

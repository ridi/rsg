import * as React from 'react';

export const DownloadSize: React.SFC<{ downloadSize: number }> = (props) => (
  <p>{ props.downloadSize }MB</p>
);

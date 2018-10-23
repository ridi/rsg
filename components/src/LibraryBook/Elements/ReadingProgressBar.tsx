import * as React from 'react';

export interface ReadingStatusProps {
  readingProgress?: number;
}

export const ReadingProgressBar: React.SFC<ReadingStatusProps> = (props) => (
  <p>독서진행률 { props.readingProgress }%</p>
);

import * as React from 'react';

export interface ReadingStatusProps {
  readingProgress: number;
}

export const ReadingProgressBar: React.SFC<ReadingStatusProps> = (props) => {
  const { readingProgress } = props;
  const progressBarWidth = { width: `${readingProgress}%` };
  return Number(readingProgress) >= 0 ? (
    <p className="ReadingProgressBar">
      <span
        className="ReadingProgressBar_Progress"
        style={progressBarWidth}
      >
        독서진행률 {readingProgress}%
      </span>
    </p>
  ) : null;
};

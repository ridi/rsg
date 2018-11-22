import * as React from 'react';

export interface ReadingStatusProps {
  readingProgress: number;
}

export const ReadingProgressBar: React.SFC<ReadingStatusProps> = (props) => {
  const { readingProgress } = props;
  const progressBarWidth = { width: `${readingProgress}%` };
  return Number(readingProgress) >= 0 ? (
    <p className="ReadingProgressBar">
      <span className="ReadingProgressBar_Title">독서진행률</span>
      <span className="ReadingProgressBar_Percentage">{readingProgress}%</span>
      <span className="ReadingProgressBar_ProgressBG">
        <span
          className="ReadingProgressBar_Progress"
          style={progressBarWidth}
        />
      </span>
    </p>
  ) : null;
};

import * as React from 'react';

export interface ReadingProgressBarProps {
  readingProgress?: number;
}

export const ReadingProgressBar: React.SFC<ReadingProgressBarProps> = (props) => {
  let { readingProgress } = props;
  if (readingProgress === undefined) { return null; }

  readingProgress = Math.max(0, Math.min(100, readingProgress));
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

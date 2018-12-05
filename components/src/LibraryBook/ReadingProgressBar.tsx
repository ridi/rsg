import * as React from 'react';

export interface ReadingProgressBarProps {
  readingProgress?: number;
}

export const ReadingProgressBar: React.SFC<ReadingProgressBarProps> = (props) => {
  if (props.readingProgress === undefined) { return null; }

  const readingProgress = Math.max(0, Math.min(100, Math.floor(props.readingProgress * 100)));
  const progressBarWidth = { width: `${readingProgress}%` };
  return (
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
  );
};

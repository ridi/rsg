import * as React from 'react';

export interface SeriesCountProps {
  unit: string;
  totalBookCount: number;
  isCompleted: boolean;
}

const SeriesCount: React.SFC<SeriesCountProps> = (props) => (
  <p className="RSGBookMetadata_SeriesCount">
    {`총 ${props.totalBookCount}${props.unit}`}
    { props.isCompleted &&
      <span className="RSGBookMetadata_SeriesComplete">완결</span>
    }
  </p>
);

export { SeriesCount };

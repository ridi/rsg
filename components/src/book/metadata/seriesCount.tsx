import classNames from 'classnames';
import * as React from 'react';

export interface SeriesCount {
  unit: string;
  totalBookCount: number;
  isCompleted: boolean;
}

export type ComponentProps = {
  className?: string;
};

export default function(data: SeriesCount = {} as SeriesCount): React.SFC<ComponentProps> {
  return ({ className }) => data.totalBookCount ? (
    <p className={classNames('RSGBookMetadata_SeriesCount', className)}>
      총 {data.totalBookCount}{data.unit}
      {data.isCompleted && <span className="RSGBookMetadata_SeriesComplete">완결</span>}
    </p>
  ) : null;
}

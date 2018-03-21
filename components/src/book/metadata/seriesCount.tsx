import classNames from 'classnames';
import * as React from 'react';

export interface SeriesCountProps {
  unit: string;
  totalBookCount: number;
  isCompleted: boolean;
}

export type ComponentProps = {
  className?: string;
};

export default function(props: SeriesCountProps): React.SFC<ComponentProps> {
  return ({ className }) => (
    <p className={classNames('RSGBookMetadata_SeriesCount', className)}>
      총 {props.totalBookCount}{props.unit}
      {props.isCompleted && <span className="RSGBookMetadata_SeriesComplete">완결</span>}
    </p>
  );
}

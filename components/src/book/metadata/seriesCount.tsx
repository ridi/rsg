import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface SeriesCount {
  unit: string;
  totalBookCount: number;
  isCompleted: boolean;
}

export default (data: SeriesCount = {} as SeriesCount): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder />; }

  return data.totalBookCount ? (
    <p className={classNames('RSGBookMetadata_SeriesCount', className)}>
      총 {data.totalBookCount}{data.unit}
      {data.isCompleted && <span className="RSGBookMetadata_SeriesComplete">완결</span>}
    </p>
  ) : null;
};

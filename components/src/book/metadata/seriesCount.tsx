import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

export interface SeriesCount {
  unit: string;
  totalBookCount: number;
  isCompleted: boolean;
}

export default (data: Data & SeriesCount): React.SFC<ComponentProps> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(props.required, !data.totalBookCount);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <div className={classNames(data.className, className)}>
      총 {data.totalBookCount}{data.unit}
      {data.isCompleted && <span className={`${data.className}_Complete`}>완결</span>}
    </div>
  );
};

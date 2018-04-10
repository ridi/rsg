import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps,
} from '../index';

export interface SetBooklet {
  memberBooksCount: number;
  calculationPolicy: number;
}

type ComponentProps = Pick<ChildrenProps, 'className' | 'dataset'>;

export default (data: Data & SetBooklet): React.SFC<ComponentProps> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(false, data.memberBooksCount === 0);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <div className={classNames(data.className, className)}>
      <p className="SetBooklet_Label">
        <span className="SetBooklet_Count">{data.memberBooksCount}</span>권 세트
      </p>
    </div>
  );
};

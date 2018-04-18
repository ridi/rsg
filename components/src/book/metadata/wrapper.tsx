import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData,
  ChildrenProps,
} from '../index';

type Data = Pick<ChildrenData, 'className'>;
type ComponentProps = Pick<ChildrenProps, 'className' | 'dataset'>;

export default (data: Data): React.SFC<ComponentProps> => (props) => {
  return (
    <div className={classNames(data.className, props.className)}>
      {props.children}
    </div>
  );
};

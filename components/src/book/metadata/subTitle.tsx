import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

export interface SubTitle {
  subTitle: string;
}

export default (data: Data & SubTitle): React.SFC<ComponentProps> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(props.required, !data.subTitle);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <p className={classNames(data.className, className)}>
      {data.subTitle}
    </p>
  );
};

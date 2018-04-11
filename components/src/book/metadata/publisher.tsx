import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

export interface Publisher {
  name: string;
  link: string;
}

export default (data: Data & Publisher): React.SFC<ComponentProps> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(props.required, !data.name);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <div className={classNames(data.className, className)}>
      <a href={data.link}>{data.name}</a>
    </div>
  );
};

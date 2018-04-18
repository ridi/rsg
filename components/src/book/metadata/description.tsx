import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

export interface Description {
  description: string;
}

export default (data: Data & Description): React.SFC<ComponentProps> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(props.required, !data.description);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <p
      className={classNames(data.className, className)}
      dangerouslySetInnerHTML={{ __html: data.description }}
    />
  );
};

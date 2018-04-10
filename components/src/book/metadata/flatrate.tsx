import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

export default (data: Data): React.SFC<ComponentProps> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <p className={classNames(data.className, className)}>
      자유이용권<span className="invisible"> 사용가능</span>
        <span className="icon-ticket_1 RSGBookMetadata_FlatrateIcon"/>
    </p>
  );
};

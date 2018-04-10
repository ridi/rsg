import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

export interface SomedealBadge {
  isSomedeal: boolean;
}

export default (data: Data & SomedealBadge): React.SFC<ComponentProps> => (props) => {
  const { isSomedeal } = data;
  const { className } = props;

  const Placeholder = data.setPlaceholder(false, !isSomedeal);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <p className={classNames(
      data.className,
      `${data.className}-type-somedeal`,
      className,
    )}>
      썸딜도서
    </p>
  );
};

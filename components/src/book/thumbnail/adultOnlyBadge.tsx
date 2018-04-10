import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps,
} from '../index';

export interface AdultOnlyBadge {
  isAdultOnly: boolean;
}

type ComponentProps = Pick<ChildrenProps, 'className' | 'dataset'>;

export default (data: Data & AdultOnlyBadge): React.SFC<ComponentProps & {
}> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(false, !data.isAdultOnly);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  const computedClassName = classNames(
    data.className,
    { [`${data.className}-small`]: false }, // TODO: thumbnailWidth 에 따라 조절
    className,
  );

  return (
    <span className={computedClassName}>19세 미만 구독불가</span>
  );
};

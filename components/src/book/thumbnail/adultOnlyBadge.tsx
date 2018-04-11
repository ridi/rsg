import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps,
} from '../index';

import { ThumbnailSize } from './wrapper';

export interface AdultOnlyBadge {
  isAdultOnly: boolean;
}

type ComponentProps = Pick<ChildrenProps, 'className' | 'dataset'>;

export default (data: Data & AdultOnlyBadge): React.SFC<ComponentProps & {
  thumbnailSize?: ThumbnailSize,
}> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(false, !data.isAdultOnly);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  const computedClassName = classNames(
    data.className,
    { [`${data.className}-small`]: props.thumbnailSize < 80 },
    className,
  );

  return (
    <span className={computedClassName}>
      <span className="invisible">19세 미만 구독불가</span>
    </span>
  );
};

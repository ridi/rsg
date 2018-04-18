import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps,
} from '../index';

import { ThumbnailSize } from './wrapper';

export interface SetBooklet {
  memberBooksCount: number;
  calculationPolicy: number;
}

type ComponentProps = Pick<ChildrenProps, 'className' | 'dataset'>;

export default (data: Data & SetBooklet): React.SFC<ComponentProps & {
  thumbnailSize?: ThumbnailSize,
}> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(false, data.memberBooksCount !== 0);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  const size = (() => {
    if (props.thumbnailSize < 80) { return 'small'; }
    if (props.thumbnailSize < 150) { return 'medium'; }
    if (props.thumbnailSize <= 180) { return 'large'; }
    return 'xlarge';
  })();

  return (
    <div className={classNames(data.className, `${data.className}-size-${size}`, className)}>
      <span className={`${data.className}_Label`}>
        <span className="museoSans">{data.memberBooksCount}</span>권 세트
      </span>
    </div>
  );
};

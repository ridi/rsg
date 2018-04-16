import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps,
} from '../index';

import { ThumbnailSize } from './wrapper';

export interface HDBadge {
  isComicHD: boolean;
}

type ComponentProps = Pick<ChildrenProps, 'className' | 'dataset'>;

export default (data: Data & HDBadge): React.SFC<ComponentProps & {
  thumbnailSize?: ThumbnailSize,
}> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(false, !data.isComicHD);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  const size = (() => {
    if (props.thumbnailSize < 80) { return 'small'; }
    if (props.thumbnailSize < 150) { return 'medium'; }
    if (props.thumbnailSize <= 180) { return 'large'; }
    return 'xlarge';
  })();

  return (
    <div className={classNames(data.className, `${data.className}-size-${size}`, className)}>
      <div className={`${data.className}_Label`}>고화질</div>
    </div>
  );
};

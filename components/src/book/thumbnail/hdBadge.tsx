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

  return (
    <div className={classNames(data.className, className)}>
      <p className="HDBadge_Label">고화질</p>
    </div>
  );
};

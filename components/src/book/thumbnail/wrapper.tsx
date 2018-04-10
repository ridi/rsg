import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData,
  ChildrenProps,
} from '../index';

import handleDataset from '../utils/dataset';

type Data = Pick<ChildrenData, 'className' | 'usePlaceholder'>;
type ComponentProps = Pick<ChildrenProps, 'className' | 'dataset'>;

export interface ThumbnailWrapper {
  link: string;
}

export type ThumbnailSize = 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 150 | 180 | 200;
const DEFAULT_SIZE: ThumbnailSize = 80;

export default (data: Data & ThumbnailWrapper): React.SFC<ComponentProps & {
  thumbnailSize?: ThumbnailSize,
  link?: ComponentProps | 'unused',
}> => (props) => {
  const {
    className,
    dataset,
    thumbnailSize = DEFAULT_SIZE,
    link = {},
  } = props;

  const style = {
    width: thumbnailSize,
    height: `${Math.floor(thumbnailSize * 1.618 - 10)}px`,
  };

  const children = React.Children.map(props.children, (
    child: React.ReactElement<{ thumbnailSize: ThumbnailSize }>,
  ) => React.cloneElement(child, { thumbnailSize }));

  return (
    <div
      className={classNames(data.className, className)}
      style={style}
    >
      {typeof link !== 'object' ? children : (
        <a
          href={data.link}
          className={classNames(
            `${data.className}_Link`,
            data.usePlaceholder && `${data.className}_Link-keepRatio`,
            link.className,
          )}
          {...handleDataset(link.dataset)}
        >
          {children}
        </a>
      )}
    </div>
  );
};

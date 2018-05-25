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

  const linkClass = classNames(`${data.className}_Link`, {
    [`${data.className}_Link-keepRatio`]: data.usePlaceholder,
  });

  const children = React.Children.map(props.children, (
    child: React.ReactElement<{ thumbnailSize: ThumbnailSize }>,
  ) => {
    return React.isValidElement(child) && typeof child.type !== 'string'
      ? React.cloneElement(child, { thumbnailSize })
      : child;
  });

  return (
    <div
      className={classNames(data.className, className)}
      style={style}
    >
      {link === 'unused'
        ? <div className={linkClass}>{children}</div>
        : (
          <a
            href={data.link}
            className={classNames(linkClass, link.className)}
            {...handleDataset(link.dataset)}
          >
            {children}
          </a>
        )
      }
    </div>
  );
};

import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps } from '../index';
import handleDataset from '../utils/dataset';

const DEFAULT_SIZE = 80;

export interface ThumbnailWrapper {
  link: string;
}

type ComponentProps = Pick<GrandChildrenProps, 'className' | 'dataset'>;

export type ThumbnailSize = 50 | 60 | 70 | 80 | 90 | 100 | 110 | 120 | 150 | 180 | 200;
export default (data: ThumbnailWrapper): React.SFC<ComponentProps & {
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

  return (
    <div
      className={classNames('RSGBookThumbnail', className)}
      style={style}
    >
      {typeof link !== 'object' ? props.children : (
        <a
          href={data.link}
          className={classNames('RSGBookThumbnail_Link', link.className)}
          {...handleDataset(link.dataset)}
        >
          {props.children}
        </a>
      )}
    </div>
  );
};

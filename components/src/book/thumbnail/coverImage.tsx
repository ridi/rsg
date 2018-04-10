import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

import { ThumbnailSize } from './wrapper';

export interface CoverImage {
  title: string;
  thumbnail: {
    small: string | null
    large: string | null
    xxlarge: string | null,
  };
}

export default (data: Data & CoverImage): React.SFC<ComponentProps & {
  size?: 'small' | 'large' | 'xxlarge',
  link?: Pick<ComponentProps, 'className' | 'dataset'> | true,
  thumbnailSize?: ThumbnailSize,
}> => (props) => {
  const { className, dataset, size = 'large' } = props;
  const imageUrl = data.thumbnail && data.thumbnail[size];

  const Placeholder = data.setPlaceholder(props.required, !imageUrl);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return <>
    <img
      className={classNames(data.className, className)}
      src={imageUrl}
      alt={data.title && `${data.title} 표지`}
    />
    <span className={`${data.className}_Shadow`} />
  </>;
};

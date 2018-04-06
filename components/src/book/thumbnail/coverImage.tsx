import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface CoverImage {
  title: string;
  thumbnail: {
    small: string | null
    large: string | null
    xxlarge: string | null,
  };
}

export default (data: CoverImage): React.SFC<ComponentProps & {
  size?: 'small' | 'large' | 'xxlarge',
  link?: Pick<ComponentProps, 'className' | 'dataset'> | true,
}> => (props) => {
  const { setPlaceholder, className, dataset, size = 'large' } = props;
  const imageUrl = data.thumbnail && data.thumbnail[size];

  const Placeholder = setPlaceholder(props.required, !imageUrl);
  if (Placeholder) { return <Placeholder />; }

  return <>
    <img
      className={classNames('RSGBookThumbnail_CoverImage', className)}
      src={imageUrl}
      alt={data.title && `${data.title} 표지`}
    />
    <span className="RSGBookThumbnail_CoverImage_Shadow" />
  </>;
};

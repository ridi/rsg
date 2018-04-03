import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface CoverImage {
  link: string;
  title: string;
  thumbnail: {
    small: string | null
    large: string | null
    xxlarge: string | null,
  };
  isAdultOnly: boolean;
}

export default (data: CoverImage): React.SFC<ComponentProps & {
  size?: 'small' | 'large' | 'xxlarge',
}> => (props) => {
  const { setPlaceholder, className, size = 'large' } = props;
  const imageUrl = data.thumbnail && data.thumbnail[size];

  const Placeholder = setPlaceholder(props.required, !imageUrl);
  if (Placeholder) { return <Placeholder />; }

  return (
    <a
      className={classNames('RSGBookThumbnail_CoverImage', className)}
      href={data.link}
    >
      {data.isAdultOnly && <span className="AdultOnlyBadge">19세 미만 구독불가</span>}
      <img
        className="CoverImage"
        src={imageUrl}
        alt={data.title && `${data.title} 표지`}
      />
    </a>
  );
};

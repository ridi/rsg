import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps, Track } from '../index';

export interface CoverImage {
  link: string;
  title: string;
  thumbnail: {
    small: string | null
    large: string | null
    xxlarge: string | null,
  };
  isAdultOnly: boolean;
  track?: Track;
}

export default (data: CoverImage): React.SFC<ComponentProps & {
  size?: 'small' | 'large' | 'xxlarge',
}> => (props) => {
  const { setPlaceholder, className, size = 'large'  } = props;
  const imageUrl = data.thumbnail && data.thumbnail[size];
  const trackClass = data.track && data.track.isLazyLoading ? 'trackable_lazy' : 'trackable';

  const Placeholder = setPlaceholder(props.required, !imageUrl);
  if (Placeholder) { return <Placeholder />; }

  return (
    <a
      className={classNames('RSGBookThumbnail_CoverImage', trackClass, className)}
      href={data.link}
      data-track-params={data.track.params}
      data-track-type={data.track.type.join(',')}
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

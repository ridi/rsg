import classNames from 'classnames';
import * as React from 'react';

export interface CoverImageProps {
  link: string;
  title: string;
  thumbnail: {
    small: string | null
    large: string | null
    xxlarge: string | null,
  };
  isAdultOnly: boolean;
}

export type ComponentProps = {
  className?: string;
};

export default function(props: CoverImageProps): React.SFC<ComponentProps> {
  return ({ className }) => {
    if (!props.thumbnail) {
      return <div>loading...</div>;
    }
    return (
      <a
        className={classNames('RSGBookThumbnail_CoverImage', className)}
        href={props.link}
      >
        {props.isAdultOnly && <span className="AdultOnlyBadge">19세 미만 구독불가</span>}
        <img className="CoverImage" src={props.thumbnail.large} alt={props.title + ' 표지'}/>
      </a>
    );
  };
}

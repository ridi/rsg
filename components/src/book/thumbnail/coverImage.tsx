import classNames from 'classnames';
import * as React from 'react';

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

export type ComponentProps = {
  className?: string;
};

export default function(data: CoverImage): React.SFC<ComponentProps> {
  return ({ className }) => {
    if (!data.thumbnail) {
      return <div>loading...</div>;
    }
    return (
      <a
        className={classNames('RSGBookThumbnail_CoverImage', className)}
        href={data.link}
      >
        {data.isAdultOnly && <span className="AdultOnlyBadge">19세 미만 구독불가</span>}
        <img className="CoverImage" src={data.thumbnail.large} alt={data.title && `${data.title} 표지`}/>
      </a>
    );
  };
}

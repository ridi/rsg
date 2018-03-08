import * as React from 'react';

export interface CoverProps {
  link: string;
  title: string;
  thumbnail: {
    small: string | null
    large: string | null
    xxlarge: string | null,
  };
  isAdultOnly: boolean;
}

const Cover: React.SFC<CoverProps> = (props) => (
  <a className="RSGBookThumbnail_CoverImage" href={props.link}>
    { props.isAdultOnly &&
      <span className="AdultOnlyBadge">19세 미만 구독불가</span>
    }
    <img className="CoverImage" src={props.thumbnail.large} alt={props.title + ' 표지'}/>
  </a>
);

export { Cover };

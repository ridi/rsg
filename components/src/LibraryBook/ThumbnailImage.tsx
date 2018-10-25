import * as React from 'react';

export interface ThumbnailImageProps {
  thumbnailUrl: string;
}

export const ThumbnailImage: React.SFC<ThumbnailImageProps> = (props) => (
  <div className="ThumbnailImage">
    <img src={props.thumbnailUrl} alt="썸네일 이미지" />
  </div>
);

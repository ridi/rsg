import * as React from 'react';

export interface ThumbnailImageProps {
  thumbnailUrl: string;
  thumbnailSize?: number;
  title: string;
}

export const ThumbnailImage: React.SFC<ThumbnailImageProps> = (props) => (
  <div className="ThumbnailImage">
    <img src={props.thumbnailUrl} alt={props.title} />
  </div>
);

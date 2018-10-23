import * as React from 'react';

export interface ThumbnailImageProps {
  thumbnailUrl: string;
  thumbnailSize?: number;
  title: string;
}

export const ThumbnailImage: React.SFC<ThumbnailImageProps> = (props) => (
  <img src={props.thumbnailUrl} alt={props.title} />
);

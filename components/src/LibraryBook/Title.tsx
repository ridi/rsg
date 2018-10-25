import * as React from 'react';

export interface TitleProps {
  title: string;
}

export const Title: React.SFC<TitleProps> = (props) => (
  <p>{props.title}</p>
);

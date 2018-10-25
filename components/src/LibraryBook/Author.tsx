import * as React from 'react';

export interface AuthorProps {
  author: string;
}

export const Author: React.SFC<AuthorProps> = (props) => (
  <p>{props.author}</p>
);

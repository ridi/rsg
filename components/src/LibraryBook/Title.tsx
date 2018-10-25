import * as React from 'react';

export const Title: React.SFC<{ title: string }> = (props) => (
  <p>{ props.title }</p>
);

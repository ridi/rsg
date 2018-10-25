import * as React from 'react';

export const Author: React.SFC<{ author: string }> = (props) => (
  <p>{ props.author }</p>
);

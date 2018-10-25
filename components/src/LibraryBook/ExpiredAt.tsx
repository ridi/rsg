import * as React from 'react';

export interface ExpiredAtProps {
  expiredAt: string;
}

export const ExpiredAt: React.SFC<ExpiredAtProps> = (props) => (
  <p>{props.expiredAt}</p>
);

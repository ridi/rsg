import { Icon } from '@ridi/rsg';
import * as React from 'react';

export interface ExpiredAtProps {
  expiredAt: string;
}

export const ExpiredAt: React.SFC<ExpiredAtProps> = (props) => (
  <p className="ExpiredAt">
    <Icon className="ExpiredAt_Icon" name="timer" />
    {props.expiredAt}
  </p>
);

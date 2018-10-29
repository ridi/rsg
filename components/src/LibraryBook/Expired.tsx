import { Icon } from '@ridi/rsg';
import * as React from 'react';

export const Expired: React.SFC = () => (
  <p className="Expired">
    <Icon className="Expired_Icon" name="timer" />
    기간 만료
  </p>
);

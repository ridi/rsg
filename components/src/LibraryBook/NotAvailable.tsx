import { Icon } from '@ridi/rsg';
import * as React from 'react';

export const NotAvailable: React.SFC = () => (
  <p className="NotAvailable">
    <Icon className="NotAvailable_Icon" name="check_5" />
    <span className="NotAvailable_Text">이용불가</span>
  </p>
);

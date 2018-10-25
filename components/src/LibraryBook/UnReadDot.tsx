import * as React from 'react';

export enum READING_STATUS {
  New = 'new',
  Opened = 'opened',
}

export const UnReadDot: React.SFC = () => (
  <p>아직 읽지 않은 책</p>
);

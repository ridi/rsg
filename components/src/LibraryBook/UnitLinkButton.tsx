import * as React from 'react';

export enum BOOK_COUNT_UNIT {
  Single = '권',
  Serial = '화',
}

export interface BookCountProps {
  bookCount?: number;
  bookCountUnit?: BOOK_COUNT_UNIT;
}

export const UnitLinkButton: React.SFC<BookCountProps> = (props) => (
  <p>총 {props.bookCount}{props.bookCountUnit}</p>
);

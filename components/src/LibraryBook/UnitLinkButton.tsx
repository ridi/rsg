import * as React from 'react';

export enum BOOK_COUNT_UNIT {
  Single = '권',
  Serial = '화',
}

export interface BookCountProps {
  bookCount: number;
  bookCountUnit: BOOK_COUNT_UNIT;
  unitLinkURL?: string;
}

export const UnitLinkButton: React.SFC<BookCountProps> = (props) => {
  const {
    bookCount,
    bookCountUnit,
  } = props;
  return Number(bookCount) > 0 ? (
    <p>총 {bookCount}{bookCountUnit}</p>
  ) : null;
};

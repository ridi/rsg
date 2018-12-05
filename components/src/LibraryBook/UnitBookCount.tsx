import { Icon } from '@ridi/rsg';
import * as React from 'react';

export enum BookCountUnit {
  Single = '권',
  Serial = '화',
}

export interface BookCountProps {
  bookCount?: number;
  bookCountUnit?: BookCountUnit;
  bookCountWrapper?: {
    wrapper?: React.ReactType;
    getProps?: () => any;
  };
}

export const UnitBookCount: React.SFC<BookCountProps> = (props) => {
  const {
    bookCount,
    bookCountUnit,
    bookCountWrapper = {},
  } = props;

  const {
    wrapper = 'p',
    getProps = () => ({}),
  } = bookCountWrapper;
  const BookCountWrapper = wrapper;

  return bookCount !== undefined && bookCount > 0 ? (
    <BookCountWrapper
      className="UnitBookCount"
      {...getProps()}
    >
      <span className="UnitBookCount_Count">
        총 {bookCount}{bookCountUnit}
        <Icon className="UnitBookCount_Icon" name="arrow_1_right" />
      </span>
    </BookCountWrapper>
  ) : null;
};

import classNames from 'classnames';
import * as React from 'react';

import { Button, Icon } from '@ridi/rsg';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  isMobile: boolean;
  item: {
    buttonComponent?: 'button' | 'a';
    getProps?: (page: number) => any;
  };
}

export const Pagination: React.SFC<PaginationProps> = (props) => {
  const {
    currentPage,
    totalPages,
    isMobile,
    item: {
      buttonComponent = 'a',
      getProps = (page?: number) => ({}),
    },
  } = props;

  const buttonDefaultStyle = {
    color: 'gray',
    outline: true,
    component: buttonComponent,
  };

  const sibilingPagesRange = isMobile ? 2 : 4;
  const displayGoFirst = !isMobile && (currentPage > sibilingPagesRange + 1);
  const displayGoPrev = currentPage !== 1;
  const displayGoNext = currentPage !== totalPages;

  const start = Math.max(1, currentPage - sibilingPagesRange);
  const end = Math.min(currentPage + sibilingPagesRange, totalPages);
  const pageNumbers = Array.from({ length: end - start + 1 }, (v, k) => k + start);

  return totalPages === 1 ? null : (
    <nav aria-label="페이지 내비게이션">
      <h2 className="a11y indent_hidden">페이지 내비게이션</h2>
      <ul className="THRPaging">
        {displayGoFirst && (
          <>
            <Button
              className={classNames([
                'THRPaging_Button',
                'FirstPageButton',
              ])}
              aria-label="첫 페이지"
              {...buttonDefaultStyle}
              {...getProps(1)}
            >
              처음
            </Button>
            <span className="THRPaging_Dots">...</span>
          </>
        )}
        {displayGoPrev && (
          <Button
            className={classNames([
              'THRPaging_Button',
              'PrevPageButton',
            ])}
            aria-label="이전 페이지"
            {...buttonDefaultStyle}
            {...getProps(currentPage - 1)}
          >
            <Icon name="arrow_8_left" className="ArrowIcon" />
          </Button>
        )}
        <div className="THRPaging_ButtonGroup">
          {pageNumbers.map((pageNumber) => (
            <Button
              key={pageNumber}
              className={classNames({
                THRPaging_Button: true,
                museo_sans: true,
                active: currentPage === pageNumber,
              })}
              aria-label={`${pageNumber} 페이지`}
              {...buttonDefaultStyle}
              {...getProps(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
        </div>
        {displayGoNext && (
          <Button
            className={classNames([
              'THRPaging_Button',
              'NextPageButton',
            ])}
            aria-label="다음 페이지"
            {...buttonDefaultStyle}
            {...getProps(currentPage + 1)}
          >
            <Icon name="arrow_8_right" className="ArrowIcon" />
          </Button>
        )}
      </ul>
    </nav>
  );
};

import * as React from 'react';

import { Button, Icon } from '@ridi/rsg';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  isMobile: boolean;
  item: {
    component?: React.ComponentType<PaginationProps>;
    getProps?: (page: number) => any;
  };
}

export const Pagination: React.SFC<PaginationProps> = (props) => {
  const {
    currentPage,
    totalPages,
    isMobile,
    item: {
      component = 'a',
      getProps = (page?: number) => ({}),
    },
  } = props;

  const getButtonDefaultProps = (isAcitve: boolean = false) => ({
    color: isAcitve ? 'blue' : 'gray',
    outline: !isAcitve,
    component,
  });

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
      <ul className="THRPagination">
        {displayGoFirst && (
          <>
            <Button
              className="THRPagination_Button"
              aria-label="첫 페이지"
              {...getButtonDefaultProps(false)}
              {...getProps(1)}
            >
              처음
            </Button>
            <span className="THRPagination_Dots">...</span>
          </>
        )}
        {displayGoPrev && (
          <Button
            className="THRPagination_Button"
            aria-label="이전 페이지"
            {...getButtonDefaultProps(false)}
            {...getProps(currentPage - 1)}
          >
            <Icon name="arrow_8_left" className="ArrowIcon" />
          </Button>
        )}
        <div className="THRPagination_ButtonGroup">
          {pageNumbers.map((pageNumber) => (
            <Button
              key={pageNumber}
              className="THRPagination_Button museoSans"
              aria-label={`${pageNumber} 페이지`}
              {...getButtonDefaultProps(currentPage === pageNumber)}
              {...getProps(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
        </div>
        {displayGoNext && (
          <Button
            className="THRPagination_Button"
            aria-label="다음 페이지"
            {...getButtonDefaultProps(false)}
            {...getProps(currentPage + 1)}
          >
            <Icon name="arrow_8_right" className="ArrowIcon" />
          </Button>
        )}
      </ul>
    </nav>
  );
};

import * as React from 'react';

import { Button, Icon } from '@ridi/rsg';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  isMobile: boolean;
  component?: React.ComponentType<PaginationProps>;
  getProps?: (page: number) => any;
}

export interface PaginationButtonProps {
  page: number;
  isActive: boolean;
  children: React.ReactChild;
}

export const Pagination: React.SFC<PaginationProps> = (props) => {
  const {
    currentPage,
    totalPages,
    isMobile,
    component = 'a',
    getProps = (page?: number) => ({}),
  } = props;

  const renderPageButton = ({
    page,
    isActive,
    children,
  }: PaginationButtonProps) => (
    <Button
      key={`pagination_${page}_page`}
      className="THRPagination_Button"
      aria-label={`${page}번째 페이지`}
      color={isActive ? 'blue' : 'gray'}
      outline={!isActive}
      component={component}
      {...getProps(page)}
    >
      {children}
    </Button>
  );

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
            {renderPageButton({
              page: 1,
              isActive: false,
              children: '처음',
            })}
            <span className="THRPagination_Dots">
              <Icon
                name="dotdotdot"
                className="DotIcon"
              />
            </span>
          </>
        )}
        {displayGoPrev && renderPageButton({
          page: (currentPage - 1),
          isActive: false,
          children: (<Icon name="arrow_8_left" className="ArrowIcon" />),
        })}
        <div className="THRPagination_ButtonGroup">
          {pageNumbers.map((pageNumber) => renderPageButton({
            page: pageNumber,
            isActive: (currentPage === pageNumber),
            children: pageNumber,
          }))}
        </div>
        {displayGoNext && renderPageButton({
          page: (currentPage + 1),
          isActive: false,
          children: (<Icon name="arrow_8_right" className="ArrowIcon" />),
        })}
      </ul>
    </nav>
  );
};

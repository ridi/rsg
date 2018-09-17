import * as React from 'react';

import { Button, ButtonGroup, Icon } from '@ridi/rsg';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  showFirstPageButton?: boolean;
  siblingPagesRange?: number;
  component?: React.ComponentType;
  getProps?: (page: number) => any;
}

export interface PaginationButtonProps {
  key?: string;
  page: number;
  isActive: boolean;
  children: React.ReactChild;
}

export const Pagination: React.SFC<PaginationProps> = (props) => {
  const {
    currentPage,
    totalPages,
    showFirstPageButton = true,
    siblingPagesRange = 4,
    component = 'a',
    getProps = (page?: number) => ({}),
  } = props;

  const renderPageButton = ({
    key,
    page,
    isActive,
    children,
  }: PaginationButtonProps) => (
    <Button
      key={key}
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

  const displayGoFirst = showFirstPageButton && (currentPage > siblingPagesRange + 1);
  const displayGoPrev = currentPage !== 1;
  const displayGoNext = currentPage !== totalPages;

  const start = Math.max(1, currentPage - siblingPagesRange);
  const end = Math.min(currentPage + siblingPagesRange, totalPages);
  const pageNumbers = Array.from({ length: end - start + 1 }, (v, k) => k + start);

  return totalPages === 1 ? null : (
    <nav aria-label="페이지 내비게이션">
      <h2 className="a11y">페이지 내비게이션</h2>
      <ul className="THRPagination">
        {displayGoFirst && (
          <>
            {renderPageButton({
              page: 1,
              isActive: false,
              children: '처음',
            })}
            <span className="THRPagination_Dots">
              <Icon name="dotdotdot" className="THRPagination_DeviderIcon" />
            </span>
          </>
        )}
        {displayGoPrev && renderPageButton({
          page: (currentPage - 1),
          isActive: false,
          children: (<Icon name="arrow_8_left" className="THRPagination_GoPrevIcon" />),
        })}
        <ButtonGroup className="THRPagination_ButtonGroup">
          {pageNumbers.map((pageNumber) => renderPageButton({
            key: pageNumber.toString(),
            page: pageNumber,
            isActive: (currentPage === pageNumber),
            children: pageNumber,
          }))}
        </ButtonGroup>
        {displayGoNext && renderPageButton({
          page: (currentPage + 1),
          isActive: false,
          children: (<Icon name="arrow_8_right" className="THRPagination_GoNextIcon" />),
        })}
      </ul>
    </nav>
  );
};

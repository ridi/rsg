import { Button, ButtonGroup, Icon } from '@ridi/rsg';
import * as React from 'react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  isMobile: boolean;
  component?: React.ComponentType;
  getProps?: (page: number) => any;
}

export const Pagination: React.SFC<PaginationProps> = (props) => {
  const {
    currentPage,
    totalPages,
    isMobile,
    component = 'a',
    getProps = (page?: number) => ({}),
  } = props;

  const sibilingPagesRange = isMobile ? 2 : 4;
  const displayGoFirst = !isMobile && (currentPage > sibilingPagesRange + 1);
  const displayGoPrev = currentPage !== 1;
  const displayGoNext = currentPage !== totalPages;

  const start = Math.max(1, currentPage - sibilingPagesRange);
  const end = Math.min(currentPage + sibilingPagesRange, totalPages);
  const pageNumbers = Array.from({ length: end - start + 1 }, (v, k) => k + start);

  if (totalPages === 1) { return null; }
  return (
    <nav aria-label="페이지 내비게이션">
      <h2 className="a11y indent_hidden">페이지 내비게이션</h2>
      <ul className="Pagination">
        {displayGoFirst && (
          <>
            <Button
              component={component}
              color="gray"
              outline
              className="Pagination_Button"
              aria-label="첫 페이지"
              {...getProps(1)}
            >
              처음
            </Button>
            <span className="Pagination_Dots">
              <Icon name="dotdotdot" className="Pagination_DeviderIcon" />
            </span>
          </>
        )}
        {displayGoPrev && (
          <Button
            component={component}
            color="gray"
            outline
            className="Pagination_Button"
            aria-label="이전 페이지"
            {...getProps(currentPage - 1)}
          >
            <Icon name="arrow_8_left" className="Pagination_GoPrevIcon" />
          </Button>
        )}
        <ButtonGroup
          className="Pagination_ButtonGroup"
        >
          {pageNumbers.map((pageNumber) => (
            <Button
              component={component}
              className="Pagination_Button"
              color={currentPage === pageNumber ? 'blue' : 'gray'}
              outline={!(currentPage === pageNumber)}
              aria-label={`${pageNumber} 페이지`}
              key={pageNumber}
              {...getProps(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}
        </ButtonGroup>
        {displayGoNext && (
          <Button
            component={component}
            color="gray"
            outline
            className="Pagination_Button"
            aria-label="다음 페이지"
            {...getProps(currentPage + 1)}
          >
            <Icon name="arrow_8_right" className="Pagination_GoNextIcon" />
          </Button>
        )}
      </ul>
    </nav>
  );
};

import classNames from 'classnames';
import * as React from 'react';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  isMobile: boolean;
  item: {
    el?: React.ReactType;
    getProps?: (page?: number) => {
      onClick?: React.ReactEventHandler<any>;
    };
  };
}

export const Pagination: React.SFC<PaginationProps> = (props) => {
  const {
    currentPage,
    totalPages,
    isMobile,
    item: {
      el: Link = 'a',
      getProps = (page?: number) => ({}),
    },
  } = props;

  const sibilingPagesRange = isMobile ? 2 : 4;
  const displayGoFirst = !isMobile && (currentPage > sibilingPagesRange + 1);
  const displayGoPrev = currentPage !== 1;
  const displayGoNext = currentPage !== totalPages;

  const start = Math.max(1, currentPage - sibilingPagesRange);
  const end = Math.min(currentPage + sibilingPagesRange, totalPages);
  const pageNumbers = Array.from({ length: end - start + 1 }, (v, k) => k + start);

  return (
    <nav aria-label="페이지 내비게이션">
      <ul className="Paging">
        {displayGoFirst && (
          <Link
            className="Paging_Button FirstPageButton"
            aria-label="첫 페이지"
            {...getProps(1)}
          >
            처음
          </Link>
        )}
        {displayGoFirst && <span className="Paging_Dots">...</span>}
        {displayGoPrev && (
          <Link
            className="Paging_Button PrevPageButton"
            aria-label="이전 페이지"
            {...getProps(currentPage - 1)}
          >
            ◀︎
          </Link>
        )}
        <div className="Paging_ButtonGroup">
          {pageNumbers.map((pageNumber) => (
            <Link
              className={classNames(['Paging_Button', 'museo_sans', { active: currentPage === pageNumber }])}
              aria-label={`${pageNumber} 페이지`}
              key={pageNumber}
              {...getProps(pageNumber)}
            >
              {pageNumber}
            </Link>
          ))}
        </div>
        {displayGoNext && (
          <Link
            className="Paging_Button NextPageButton"
            aria-label="다음 페이지"
            {...getProps(currentPage + 1)}
          >
            ▶︎
          </Link>
        )}
      </ul>
    </nav>
  );
};

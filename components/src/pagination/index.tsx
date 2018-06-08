import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../icon';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  isMobile: boolean;
  makeURL: (page: number) => string;
  onLinkClick?: (event: React.SyntheticEvent<any>) => any;
}

export const Pagination: React.SFC<PaginationProps> = (props) => {
  const { currentPage, isMobile, totalPages, makeURL, onLinkClick } = props;

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
            to={makeURL(1)}
            className="Paging_Button FirstPageButton"
            aria-label="첫 페이지"
            onClick={onLinkClick}
          >
            처음
          </Link>
        )}
        {displayGoFirst && <span className="Paging_Dots">...</span>}
        {displayGoPrev && (
          <Link
            to={makeURL(currentPage - 1)}
            className="Paging_Button PrevPageButton"
            aria-label="이전 페이지"
            onClick={onLinkClick}
          >
            <Icon name="arrow_5_left" className="ArrowIcon" />
          </Link>
        )}
        <div className="Paging_ButtonGroup">
          {pageNumbers.map((pageNumber) => (
            <Link
              to={makeURL(pageNumber)}
              className={classNames(['Paging_Button', 'museo_sans', { active: currentPage === pageNumber }])}
              aria-label={`${pageNumber} 페이지`}
              key={pageNumber}
              onClick={onLinkClick}
            >
              {pageNumber}
            </Link>
          ))}
        </div>
        {displayGoNext && (
          <Link
            to={makeURL(currentPage + 1)}
            className="Paging_Button NextPageButton"
            aria-label="다음 페이지"
            onClick={onLinkClick}
          >
            <Icon name="arrow_5_right" className="ArrowIcon" />
          </Link>
        )}
      </ul>
    </nav>
  );
};

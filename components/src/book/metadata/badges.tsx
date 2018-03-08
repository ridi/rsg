import * as React from 'react';

export interface BookTypeBadgeProps {
  isNovel: boolean
  isComic: boolean
}

export interface SomedealBadgeProps {
  isSomedeal: boolean
}

const BookTypeBadge: React.SFC<BookTypeBadgeProps> = (props) => (
  <React.Fragment>
    {props.isComic && 
      <p className='RSGBookMetadata_Badge RSGBookMetadata_Badge-type-comic'>만화</p>}
    {props.isNovel && 
      <p className='RSGBookMetadata_Badge RSGBookMetadata_Badge-type-novel'>소설</p>}
  </React.Fragment>
)

const SomedealBadge: React.SFC<SomedealBadgeProps> = (props) => (
  <React.Fragment>
    {props.isSomedeal && 
      <p className='RSGBookMetadata_Badge RSGBookMetadata_Badge-type-somedeal'>썸딜도서</p>}
  </React.Fragment>
)

export { BookTypeBadge, SomedealBadge }

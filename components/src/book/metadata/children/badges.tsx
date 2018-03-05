import * as React from 'react';

export interface BadgesProps {
  isSomedeal: boolean
  isNovel: boolean
  isComic: boolean
}

const Badges: React.SFC<BadgesProps> = (props) => (
  <React.Fragment>
    {props.isSomedeal && 
      <span className='RSGBookMetadata_Badge RSGBookMetadata_Badge-type-somedeal'>썸딜도서</span>}
    {props.isComic && 
      <span className='RSGBookMetadata_Badge RSGBookMetadata_Badge-type-comic'>만화</span>}
    {props.isNovel && 
      <span className='RSGBookMetadata_Badge RSGBookMetadata_Badge-type-novel'>소설</span>}
  </React.Fragment>
)

export { Badges }

import * as React from 'react';

export interface BadgesProps {
  isSomedeal: boolean
  isNovel: boolean
  isComic: boolean
}

const Badges: React.SFC<BadgesProps> = (props) => (
  <React.Fragment>
    {props.isSomedeal && <span className='RSGBookMetadata_Somedeal'>썸딜도서</span>}
    {props.isComic && <span className='RSGBookMetadata_Comic'>만화</span>}
    {props.isNovel && <span className='RSGBookMetadata_Novel'>소설</span>}
  </React.Fragment>
)

export { Badges }

import * as React from 'react';

export interface BadgesProps {
  isSomedeal: boolean
  isNovel: boolean
  isComic: boolean
}

const Badges: React.SFC<BadgesProps> = (props) => (
  <React.Fragment>
    {props.isSomedeal && <span className='rsgBook__metadata__somedeal'>썸딜도서</span>}
    {props.isNovel && <span className='rsgBook__metadata__novel'>소설</span>}
    {props.isComic && <span className='rsgBook__metadata__comic'>만화</span>}
  </React.Fragment>
)

export { Badges }

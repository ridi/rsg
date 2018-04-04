import * as React from 'react';

export interface SeriesCountProps {
  unit: string
  totalBookCount: number
  isCompleted: boolean
}

const SeriesCount: React.SFC<SeriesCountProps> = (props) => (
  <span className='rsgBook__metadata__count'>
  </span>
)

export { SeriesCount }

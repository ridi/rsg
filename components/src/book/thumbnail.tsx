import * as React from 'react';

import { Cover, CoverProps } from './thumbnail/coverImage'
import { CircleBadge, CircleBadgeProps } from './thumbnail/circleBadge'
import { HdBadge, HdBadgeProps } from './thumbnail/hdBadge'
import { SetBooklet, SetBookletProps } from './thumbnail/setBooklet'


export interface ThumbnailProps extends CoverProps, HdBadgeProps {
  id?: string
  circleBadge: CircleBadgeProps
  setBooklet: SetBookletProps
  size?: number
}

const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  return (
    <div className='rsgBook__thumbnail'>
      <Cover {...props}/>
      <CircleBadge {...props.circleBadge}/>
      <HdBadge isComicHd={props.isComicHd}/>
      <SetBooklet {...props.setBooklet}/>
    </div>
  )
}

export { Thumbnail }

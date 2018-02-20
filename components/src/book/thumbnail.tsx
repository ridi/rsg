import * as React from 'react';

import { Cover, CoverProps } from './thumbnail/coverImage'
import { CircleBadge, CircleBadgeProps } from './thumbnail/circleBadge'
import { HDBadge, HDBadgeProps } from './thumbnail/HDBadge'
import { SetBooklet, SetBookletProps } from './thumbnail/setBooklet'


export interface ThumbnailProps extends CoverProps, HDBadgeProps {
  id?: string
  circleBadge: CircleBadgeProps
  setBooklet: SetBookletProps
  size?: number
}

const Thumbnail: React.SFC<ThumbnailProps> = (props) => {
  return (
    <div className='RSGBookThumbnail'>
      <Cover {...props}/>
      <CircleBadge {...props.circleBadge}/>
      <HDBadge isComicHD={props.isComicHD}/>
      <SetBooklet {...props.setBooklet}/>
    </div>
  )
}

export { Thumbnail }

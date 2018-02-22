import * as React from 'react';
import classNames from 'classnames'

import { Cover, CoverProps } from './thumbnail/coverImage'
import { CircleBadge, CircleBadgeProps } from './thumbnail/circleBadge'
import { HDBadge, HDBadgeProps } from './thumbnail/HDBadge'
import { SetBooklet, SetBookletProps } from './thumbnail/setBooklet'


export interface ThumbnailProps extends CoverProps, HDBadgeProps {
  id?: string
  circleBadge: CircleBadgeProps
  setBooklet: SetBookletProps
}

export interface ComponentProps {
  size?: number
}

const Thumbnail: React.SFC<ThumbnailProps & ComponentProps> = (props) => {
  const classList = [
    'RSGBookThumbnail',
    `RSGBookThumbnail-size-${ props.size }`,
  ]

  const style = {
    width: props.size,
  }

  return (
    <div className={ classNames(classList) } style={ style }>
      <div className="RSGBookThumbnail_Cell">
        <Cover {...props}/>
        <CircleBadge {...props.circleBadge}/>
        <HDBadge isComicHD={props.isComicHD}/>
        <SetBooklet {...props.setBooklet}/>
      </div>
    </div>
  )
}

Thumbnail.defaultProps = {
  size: 80
}

export { Thumbnail }

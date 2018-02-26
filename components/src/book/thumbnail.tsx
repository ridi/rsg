import * as React from 'react';
import classNames from 'classnames'

import ChildComponents, { ThumbnailProps } from './thumbnail/'

export interface ComponentProps {
  size?: number
  children?: (Components: ChildComponents) => React.ReactElement<any>
}

const Thumbnail: React.SFC<ThumbnailProps & ComponentProps> = (props) => {
  const { size, children, ...thumbnailProps } = props
  const classList = [
    'RSGBookThumbnail',
    `RSGBookThumbnail-size-${ size }`,
  ]
  const style = {
    width: size,
  }
  const Components = new ChildComponents(thumbnailProps)

  return (
    <div className={ classNames(classList) } style={ style }>
      <div className="RSGBookThumbnail_Cell">
        { typeof children === 'function' ? children(Components) :
          <>
            <Components.coverImage />
            <Components.circleBadge />
            <Components.hdBadge />
            <Components.setBooklet />
          </>
        }
      </div>
    </div>
  )
}

Thumbnail.defaultProps = {
  size: 80
}

export { Thumbnail, ThumbnailProps }

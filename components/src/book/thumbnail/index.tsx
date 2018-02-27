import * as React from 'react';
import classNames from 'classnames'

import BaseProps from './baseProps'
import { Cover, CoverProps } from './children/coverImage'
import { CircleBadge, CircleBadgeProps } from './children/circleBadge'
import { HDBadge, HDBadgeProps } from './children/hdBadge'
import { SetBooklet, SetBookletProps } from './children/setBooklet'

export type Children<P> = React.SFC<P & { classNames?: any }>

class ChildComponents {
  private props: BaseProps

  constructor (props: BaseProps) {
    this.props = props
  }

  wrapper: Children<{ thumbnailSize?: number }> = props => {
    const DEFAULT_SIZE = 80
    const thumbnailWidth = props.thumbnailSize || DEFAULT_SIZE
    const classList = [
      'RSGBookThumbnail',
      `RSGBookThumbnail-size-${ thumbnailWidth }`,
    ]
    const inlineStyleWidth = {
      width: thumbnailWidth,
    }

    return (
      <div className={classNames(classList, props.classNames)} style={inlineStyleWidth}>
        <div className="RSGBookThumbnail_Cell">
          {props.children}
        </div>
      </div>
    )
  }

  coverImage: Children<{}> = () => {
    return (
      <Cover
        {...this.props}
      />
    )
  }

  circleBadge: Children<{}> = () => {
    return (
      <CircleBadge
        {...this.props.circleBadge}
      />
    )
  }

  hdBadge: Children<{}> = () => {
    return (
      <HDBadge
        isComicHD={this.props.isComicHD}
      />
    )
  }

  setBooklet: Children<{}> = () => {
    return (
      <SetBooklet
        {...this.props.setBooklet}
      />
    )
  }
}

export default ChildComponents

export { BaseProps as ThumbnailProps }

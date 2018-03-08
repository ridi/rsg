import * as React from 'react';
import classNames from 'classnames'

import BaseProps from './baseProps'
import { Cover, CoverProps } from './children/coverImage'
import { CircleBadge, CircleBadgeProps } from './children/circleBadge'
import { HDBadge, HDBadgeProps } from './children/hdBadge'
import { SetBooklet, SetBookletProps } from './children/setBooklet'

function addChildren<T = {}> (name: string, Component: React.SFC<T>): React.SFC<T> {
  Component.displayName = `Thumbnail.${name}`
  return Component
}

export default class {
  constructor (private readonly props: BaseProps) {}

  wrapper: React.SFC<{ className?: string, thumbnailSize?: number }> = addChildren('wrapper', props => {
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
      <div className={classNames(classList, props.className)} style={inlineStyleWidth}>
        <div className="RSGBookThumbnail_Cell">
          {props.children}
        </div>
      </div>
    )
  })

  coverImage: React.SFC<{ className?: string }> = addChildren('coverImage', () => {
    return (
      <Cover
        {...this.props}
      />
    )
  })

  circleBadge: React.SFC<{ className?: string }> = addChildren('circleBadge', () => {
    return (
      <CircleBadge
        {...this.props.circleBadge}
      />
    )
  })

  hdBadge: React.SFC<{ className?: string }> = addChildren('hdBadge', () => {
    return (
      <HDBadge
        isComicHD={this.props.isComicHD}
      />
    )
  })

  setBooklet: React.SFC<{ className?: string }> = addChildren('setBooklet', () => {
    return (
      <SetBooklet
        {...this.props.setBooklet}
      />
    )
  })
}

export { BaseProps as ThumbnailProps }

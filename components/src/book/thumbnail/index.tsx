import * as React from 'react';
import classNames from 'classnames'

import { ThumbnailProps } from '../props/thumbnail'
import { Cover, CoverProps } from './coverImage'
import { CircleBadge, CircleBadgeProps } from './circleBadge'
import { HDBadge, HDBadgeProps } from './hdBadge'
import { SetBooklet, SetBookletProps } from './setBooklet'

function addChildren<T = {}> (name: string, Component: React.SFC<T>): React.SFC<T> {
  Component.displayName = `Thumbnail.${name}`
  return Component
}

export default class {
  constructor (private readonly props: ThumbnailProps) {}

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

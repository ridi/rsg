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

  wrapper: Children<{ size: number }> = props => {
    return (
      <div className={classNames(props.classNames)}>
        {props.children}
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

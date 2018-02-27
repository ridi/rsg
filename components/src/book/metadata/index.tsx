import * as React from 'react';
import classNames from 'classnames'

import BaseProps from './baseProps'
import { Authors, ComponentProps as AuthorsComponentProps } from './children/authors'
import { SeriesCount } from './children/seriesCount'
import { Price } from './children/price'
import { Badges } from './children/badges'

export type Children<P> = React.SFC<P & { classNames?: any, layout? :string }>

class ChildComponents {
  private props: BaseProps

  constructor (props: BaseProps) {
    this.props = props
  }

  wrapper: Children<{}> = props => {
    const DEFAULT_LAYOUT = 'portrait'
    const layout = props.layout || DEFAULT_LAYOUT

    return (
      <div className={classNames('RSGBookMetadata', `RSGBookMetadata-layout-${ layout }`, props.classNames)}>
        {props.children}
      </div>
    )
  }

  title: Children<{}> = props => {
    const { title } = this.props
    return (
      <a href={this.props.link}>
        <p className={`${'RSGBookMetadata'}_Title`}>
          {
            title.prefix
            ? `${title.prefix} ${title.main}`
            : title.main
          }
        </p>
      </a>
    )
  }
  subTitle: Children<{}> = () => {
    return (
      <p className={`${'RSGBookMetadata'}_SubTitle`}>
        {this.props.title.sub}
      </p>
    )
  }
  description: Children<{}> = () => {
    return (
      <p className={`${'RSGBookMetadata'}_Description`}>
        {this.props.description}
      </p>
    )
  }
  authors: Children<AuthorsComponentProps> = props => {
    return (
      <Authors
        {...this.props.authors}
        {...props}
      />
    )
  }
  count: Children<{}> = () => {
    const { property: seriesProperty } = this.props.series
    return (
      <SeriesCount
        isCompleted={seriesProperty.isCompleted}
        totalBookCount={seriesProperty.totalBookCount}
        unit={seriesProperty.unit}
      />
    )
  }
  publisher: Children<{}> = () => {
    return (
      <p className={`${'RSGBookMetadata'}_Publisher`}>{this.props.publisher.name}</p>
    )
  }
  flatrate: Children<{}> = () => {
    return (
      <p className={`${'RSGBookMetadata'}_Flatrate`}>
        자유이용권<span className='invisible'> 사용가능</span>
        <span className='icon-ticket_1'/>
      </p>
    )
  }
  badges: Children<{}> = () => {
    const { property } = this.props
    return (
      <Badges
        isSomedeal={property.isSomedeal}
        isNovel={property.isNovel}
        isComic={property.isComic}
      />
    )
  }
  price: Children<{}> = () => {
    return (
      <Price {...this.props.priceInfo}/>
    )
  }
}

export default ChildComponents

export { BaseProps as MetadataProps }

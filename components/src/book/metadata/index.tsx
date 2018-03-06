import * as React from 'react';
import classNames from 'classnames'

import BaseProps from './baseProps'
import { Authors, ComponentProps as AuthorsComponentProps } from './children/authors'
import { SeriesCount } from './children/seriesCount'
import { Price } from './children/price'
import { BookTypeBadge, SomedealBadge } from './children/badges'

export type Children<P> = React.SFC<P & { classNames?: any }>

class ChildComponents {
  constructor (private readonly props: BaseProps) {}

  wrapper: Children<{ layout?: string, width?: number }> = props => {
    const DEFAULT_LAYOUT = 'portrait'
    const layout = props.layout || DEFAULT_LAYOUT
    const metadataWidth = props.width || 'auto'
    const inlineStyleWidth = {
      width: metadataWidth,
    }

    return (
      <div
        className={classNames('RSGBookMetadata', `RSGBookMetadata-layout-${layout}`, props.classNames)}
        style={inlineStyleWidth}>
          {props.children}
      </div>
    )
  }
  someDealBadge: Children<{}> = () => {
    const {property} = this.props
    return (
      <SomedealBadge isSomedeal={property.isSomedeal} />
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
        <span className='icon-ticket_1 RSGBookMetadata_FlatrateIcon'/>
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
  price: Children<{}> = () => {
    return (
      <Price {...this.props.priceInfo}/>
    )
  }
  bookTypeBadge: Children<{}> = () => {
    const { property } = this.props
    return (
      <BookTypeBadge
        isNovel={property.isNovel}
        isComic={property.isComic}
      />
    )
  }
}

export default ChildComponents

export { BaseProps as MetadataProps }

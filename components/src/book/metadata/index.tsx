import * as React from 'react';

import { BaseProps } from './baseProps'
import { Authors } from './children/authors'
import { SeriesCount } from './children/seriesCount'
import { Price } from './children/price'
import { Badges } from './children/badges'

export interface MetadataChildren {
  title: React.SFC<{}>
  subTitle: React.SFC<{}>
  description: React.SFC<{}>
  starRate: React.SFC<{}>
  authors: React.SFC<{}>
  count: React.SFC<{}>
  publisher: React.SFC<{}>
  flatrate: React.SFC<{}>
  badges: React.SFC<{}>
  price: React.SFC<{}>
}

export interface ChildComponents extends MetadataChildren {
  props?: BaseProps
}

export class ChildComponents {
  constructor (props: BaseProps) {
    this.props = props
  }
  title = () => {
    const { title } = this.props
    return (
      <a href={this.props.link}>
        <p className='RSGBookMetadata_Title'>
          {
            title.prefix
            ? `${title.prefix} ${title.main}`
            : title.main
          }
        </p>
      </a>
    )
  }
  subTitle = () => {
    return (
      <p className='RSGBookMetadata_SubTitle'>
        {this.props.title.sub}
      </p>
    )
  }
  description = () => {
    return (
      <p className='RSGBookMetadata_Description'>
        {this.props.description}
      </p>
    )
  }
  authors = () => {
    return (
      <Authors
        {...this.props.authors}
      />
    )
  }
  count = () => {
    const { property: seriesProperty } = this.props.series
    return (
      <SeriesCount
        isCompleted={seriesProperty.isCompleted}
        totalBookCount={seriesProperty.totalBookCount}
        unit={seriesProperty.unit}
      />
    )
  }
  publisher = () => {
    return (
      <p className='RSGBookMetadata_Publisher'>{this.props.publisher.name}</p>
    )
  }
  flatrate = () => {
    return (
      <p className='RSGBookMetadata_Flatrate'>
        자유이용권<span className='invisible'> 사용가능</span>
        <span className='icon-ticket_1'/>
      </p>
    )
  }
  badges = () => {
    const { property } = this.props
    return (
      <Badges
        isSomedeal={property.isSomedeal}
        isNovel={property.isNovel}
        isComic={property.isComic}
      />
    )
  }
  price = () => {
    return (
      <Price {...this.props.priceInfo}/>
    )
  }
}

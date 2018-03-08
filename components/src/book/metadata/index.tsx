import classNames from 'classnames';
import * as React from 'react';

import { MetadataProps } from '../props/metadata';
import { Authors, ComponentProps as AuthorsComponentProps } from './authors';
import { BookTypeBadge, SomedealBadge } from './badges';
import { Price } from './price';
import { SeriesCount } from './seriesCount';
import { StarRate } from './StarRate';

function addChildren<T = {}>(name: string, Component: React.SFC<T>): React.SFC<T> {
  Component.displayName = `Metadata.${name}`;
  return Component;
}

export default class {
  constructor(private readonly props: MetadataProps) {}

  public wrapper: React.SFC<{
    className?: string,
    layout?: string,
    width?: number,
  }> = addChildren('wrapper', (props) => {
    const DEFAULT_LAYOUT = 'portrait';
    const layout = props.layout || DEFAULT_LAYOUT;
    const metadataWidth = props.width || 'auto';
    const inlineStyleWidth = {
      width: metadataWidth,
    };

    return (
      <div
        className={classNames('RSGBookMetadata', `RSGBookMetadata-layout-${layout}`, props.className)}
        style={inlineStyleWidth}
      >
          {props.children}
      </div>
    );
  });

  public title: React.SFC<{ className?: string }> = addChildren('title', (props) => {
    const { title } = this.props;
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
    );
  });

  public subTitle: React.SFC<{ className?: string }> = addChildren('subTitle', () => {
    return (
      <p className={`${'RSGBookMetadata'}_SubTitle`}>
        {this.props.title.sub}
      </p>
    );
  });

  public authors: React.SFC<AuthorsComponentProps> = addChildren('authors', (props) => {
    return (
      <Authors
        {...this.props.authors}
        {...props}
      />
    );
  });

  public starRate: React.SFC<{ className?: string }> = addChildren('starRate', (props) => {
    return (
      <StarRate {...this.props.starRate}/>
    );
  });

  public count: React.SFC<{ className?: string }> = addChildren('count', () => {
    const { property: seriesProperty } = this.props.series;
    return (
      <SeriesCount
        isCompleted={seriesProperty.isCompleted}
        totalBookCount={seriesProperty.totalBookCount}
        unit={seriesProperty.unit}
      />
    );
  });

  public publisher: React.SFC<{ className?: string }> = addChildren('publisher', () => {
    return (
      <p className={`${'RSGBookMetadata'}_Publisher`}>{this.props.publisher.name}</p>
    );
  });

  public flatrate: React.SFC<{ className?: string }> = addChildren('flatrate', () => {
    return (
      <p className={`${'RSGBookMetadata'}_Flatrate`}>
        자유이용권<span className="invisible"> 사용가능</span>
        <span className="icon-ticket_1 RSGBookMetadata_FlatrateIcon"/>
      </p>
    );
  });

  public description: React.SFC<{ className?: string }> = addChildren('description', () => {
    return (
      <p className={`${'RSGBookMetadata'}_Description`}>
        {this.props.description}
      </p>
    );
  });

  public price: React.SFC<{ className?: string }> = addChildren('price', () => {
    return (
      <Price {...this.props.priceInfo}/>
    );
  });

  public bookTypeBadge: React.SFC<{ className?: string }> = addChildren('bookTypeBadge', () => {
    const { property } = this.props;
    return (
      <BookTypeBadge
        isNovel={property.isNovel}
        isComic={property.isComic}
      />
    );
  });

  public someDealBadge: React.SFC<{ className?: string }> = addChildren('someDealBadge', () => {
    const {property} = this.props;
    return (
      <SomedealBadge isSomedeal={property.isSomedeal} />
    );
  });
}

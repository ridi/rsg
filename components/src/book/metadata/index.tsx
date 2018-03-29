import * as React from 'react';
import { BookDto } from '../dto';

import authors from './authors';
import bookTypeBadge from './bookTypeBadge';
import description from './description';
import flatrate from './flatrate';
import price from './price';
import publisher from './publisher';
import seriesCount from './seriesCount';
import someDealBadge from './somedealBadge';
import starRate from './starRate';
import subTitle from './subTitle';
import title from './title';
import wrapper from './wrapper';

function withDisplayName<T = {}>(name: string, Component: React.SFC<T>): React.SFC<T> {
  Component.displayName = `Metadata.${name}`;
  return Component;
}

export default class {
  constructor(private readonly dto: BookDto) {}

  public wrapper = withDisplayName('wrapper', wrapper());

  public title = withDisplayName('title', title({
    title: this.dto.title && `${this.dto.title.prefix || ''} ${this.dto.title.main}`.trim(),
    link: `/v2/Detail?id=${this.dto.id}`,
  }));

  public subTitle = withDisplayName('subTitle', subTitle({
    subTitle: this.dto.title && this.dto.title.sub,
  }));

  public authors = withDisplayName('authors', authors(this.dto.authors));

  public starRate = withDisplayName('starRate', starRate(this.dto.starRate));

  public seriesCount = withDisplayName('seriesCount', seriesCount(
    this.dto.series && this.dto.series.property,
  ));

  public publisher = withDisplayName('publisher', publisher(this.dto.publisher && {
    name: this.dto.publisher.name,
    link: `/search?q=출판사:${this.dto.publisher.name}`,
  }));

  public flatrate = withDisplayName('flatrate', flatrate());

  public description = withDisplayName('description', description({
    description: this.dto.description,
  }));

  public price = withDisplayName('price', price({
    book: this.dto.priceInfo,
    series: this.dto.series && this.dto.series.priceInfo,
  }));

  public bookTypeBadge = withDisplayName('bookTypeBadge', bookTypeBadge({
    isComic: this.dto.property && this.dto.property.isComic,
    isNovel: this.dto.property && this.dto.property.isNovel,
  }));

  public someDealBadge = withDisplayName('someDealBadge', someDealBadge({
    isSomedeal: this.dto.property && this.dto.property.isSomedeal,
  }));
}

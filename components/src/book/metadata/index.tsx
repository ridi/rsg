import classNames from 'classNames';
import { upperFirst } from 'lodash-es';
import * as React from 'react';

import { BookDto } from '../dto';
import { GrandChildrenProps as ComponentProps, SetPlaceholder } from '../index';

import authors from './authors';
import bookTypeBadge from './bookTypeBadge';
import description from './description';
import flatrate from './flatrate';
import price from './price';
import publisher from './publisher';
import seriesCount from './seriesCount';
import someDealBadge from './somedealBadge';
import starRate from './StarRate';
import subTitle from './subTitle';
import title from './title';
import wrapper from './wrapper';

function trim(strings: TemplateStringsArray, ...values: string[]) {
  return strings.reduce((prev, cur, i) => prev + strings[i] + (values[i] || ''), '').trim();
}

export default class {
  constructor(
    private readonly dto: BookDto,
    private readonly setPlaceholder: SetPlaceholder,
  ) {}

  private compose<T extends React.SFC<ComponentProps>>(name: string, Component: T): T {
    const className = classNames(
      `RSGBookMetadata_${upperFirst(name)}`,
      `RSGBookMetadata_${upperFirst(name)}-placeholder`,
    );
    Component.displayName = `Metadata.${name}`;
    Component.defaultProps = {
      setPlaceholder: this.setPlaceholder({ className }),
    };
    return Component;
  }

  public wrapper = this.compose('wrapper', wrapper());

  public title = this.compose('title', title({
    title: this.dto.title && trim`${this.dto.title.prefix} ${this.dto.title.main}`,
    link: `/v2/Detail?id=${this.dto.id}`,
  }));

  public subTitle = this.compose('subTitle', subTitle({
    subTitle: this.dto.title && this.dto.title.sub,
  }));

  public authors = this.compose('authors', authors(this.dto.authors));

  public starRate = this.compose('starRate', starRate(this.dto.starRate));

  public seriesCount = this.compose('seriesCount', seriesCount(
    this.dto.series && this.dto.series.property,
  ));

  public publisher = this.compose('publisher', publisher(this.dto.publisher && {
    name: this.dto.publisher.name,
    link: `/search?q=출판사:${this.dto.publisher.name}`,
  }));

  public flatrate = this.compose('flatrate', flatrate());

  public description = this.compose('description', description({
    description: this.dto.description,
  }));

  public price = this.compose('price', price({
    book: this.dto.priceInfo,
    series: this.dto.series && this.dto.series.priceInfo,
  }));

  public bookTypeBadge = this.compose('bookTypeBadge', bookTypeBadge({
    isComic: this.dto.property && this.dto.property.isComic,
    isNovel: this.dto.property && this.dto.property.isNovel,
  }));

  public someDealBadge = this.compose('someDealBadge', someDealBadge({
    isSomedeal: this.dto.property && this.dto.property.isSomedeal,
  }));
}

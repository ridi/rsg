import classNames from 'classnames';
import { upperFirst } from 'lodash-es';
import * as React from 'react';

import { MetadataProps } from '../dto/toProps';
import { GrandChildrenProps as ComponentProps, SetPlaceholder } from '../index';

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

export default class {
  constructor(
    private readonly props: MetadataProps,
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

  public title = this.compose('title', title(this.props.title));

  public subTitle = this.compose('subTitle', subTitle(this.props.subTitle));

  public authors = this.compose('authors', authors(this.props.authors));

  public starRate = this.compose('starRate', starRate(this.props.starRate));

  public seriesCount = this.compose('seriesCount', seriesCount(this.props.seriesCount));

  public publisher = this.compose('publisher', publisher(this.props.publisher));

  public flatrate = this.compose('flatrate', flatrate());

  public description = this.compose('description', description(this.props.description));

  public price = this.compose('price', price(this.props.price));

  public bookTypeBadge = this.compose('bookTypeBadge', bookTypeBadge(this.props.bookTypeBadge));

  public someDealBadge = this.compose('someDealBadge', someDealBadge(this.props.somedealBadge));
}

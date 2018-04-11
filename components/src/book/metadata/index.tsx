import classNames from 'classnames';
import { upperFirst } from 'lodash-es';
import * as React from 'react';

import { MetadataProps } from '../dto/toProps';
import { BookState, ChildrenProps as ComponentProps, SetPlaceholder } from '../index';

import authors from './authors';
import bookTypeBadge from './bookTypeBadge';
import description from './description';
import price from './price';
import publisher from './publisher';
import seriesCount from './seriesCount';
import someDealBadge from './somedealBadge';
import starRate from './starRate';
import subTitle from './subTitle';
import title from './title';
import wrapper from './wrapper';

function withDisplayName<T extends React.SFC<ComponentProps>>(name: string, Component: T): T {
  Component.displayName = `Metadata.${name}`;
  return Component;
}

export default class {
  constructor(
    private readonly state: BookState,
    private readonly setPlaceholder: SetPlaceholder,
  ) {}

  public wrapper = withDisplayName('wrapper', wrapper({
    className: 'RSGBookMetadata',
  }));

  public title = withDisplayName('title', title({
    className: 'RSGBookMetadata_Title',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.title,
  }));

  public subTitle = withDisplayName('subTitle', subTitle({
    className: 'RSGBookMetadata_SubTitle',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.subTitle,
  }));

  public authors = withDisplayName('authors', authors({
    className: 'RSGBookMetadata_Authors',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.authors,
  }));

  public starRate = withDisplayName('starRate', starRate({
    className: 'RSGBookMetadata_StarRate',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.starRate,
  }));

  public seriesCount = withDisplayName('seriesCount', seriesCount({
    className: 'RSGBookMetadata_SeriesCount',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.seriesCount,
  }));

  public publisher = withDisplayName('publisher', publisher({
    className: 'RSGBookMetadata_Publisher',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.publisher,
  }));

  public description = withDisplayName('description', description({
    className: 'RSGBookMetadata_Description',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.description,
  }));

  public price = withDisplayName('price', price({
    className: 'RSGBookMetadata_Price',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.price,
  }));

  public bookTypeBadge = withDisplayName('bookTypeBadge', bookTypeBadge({
    className: 'RSGBookMetadata_Badge',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.bookTypeBadge,
  }));

  public someDealBadge = withDisplayName('someDealBadge', someDealBadge({
    className: 'RSGBookMetadata_Badge',
    setPlaceholder: this.setPlaceholder,
    ...this.state.metadataProps.somedealBadge,
  }));
}

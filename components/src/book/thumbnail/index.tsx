import * as React from 'react';
import { BookDto } from '../dto';

import circleBadge from './circleBadge';
import coverImage from './coverImage';
import hdBadge from './hdBadge';
import setBooklet from './setBooklet';
import wrapper from './wrapper';

import { getCircleBadge } from '../dto/getCircleBadge';

function withDisplayName<T = {}>(name: string, Component: React.SFC<T>): React.SFC<T> {
  Component.displayName = `Thumbnail.${name}`;
  return Component;
}

export default class {
  constructor(private readonly dto: BookDto) {}

  public wrapper = withDisplayName('wrapper', wrapper());

  public coverImage = withDisplayName('coverImage', coverImage({
    link: `/v2/Detail?id=${this.dto.id}`,
    title: this.dto.title && this.dto.title.main,
    thumbnail: this.dto.thumbnail,
    isAdultOnly: this.dto.property && this.dto.property.isAdultOnly,
  }));

  public circleBadge = withDisplayName('circleBadge', circleBadge(
    getCircleBadge(this.dto),
  ));

  public hdBadge = withDisplayName('hdBadge', hdBadge({
    isComicHD: this.dto.file && this.dto.file.isComicHd,
  }));

  public setBooklet = withDisplayName('setBooklet', setBooklet(
    this.dto.setbook,
  ));
}

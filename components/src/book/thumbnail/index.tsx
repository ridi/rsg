import classNames from 'classNames';
import { upperFirst } from 'lodash-es';
import * as React from 'react';

import { BookDto } from '../dto/index';
import { GrandChildrenProps as ComponentProps, SetPlaceholder } from '../index';

import circleBadge from './circleBadge';
import coverImage from './coverImage';
import hdBadge from './hdBadge';
import setBooklet from './setBooklet';
import wrapper from './wrapper';

import { getCircleBadge } from '../dto/getCircleBadge';

export default class {
  constructor(
    private readonly dto: BookDto,
    private readonly setPlaceholder: SetPlaceholder,
  ) {}

  private compose<T extends React.SFC<ComponentProps>>(name: string, Component: T): T {
    const className = classNames(
      `RSGBookThumbnail_${upperFirst(name)}`,
      `RSGBookThumbnail_${upperFirst(name)}-placeholder`,
    );
    Component.displayName = `Thumbnail.${name}`;
    Component.defaultProps = {
      setPlaceholder: this.setPlaceholder({ className }),
    };
    return Component;
  }

  public wrapper = this.compose('wrapper', wrapper());

  public coverImage = this.compose('coverImage', coverImage({
    link: `/v2/Detail?id=${this.dto.id}`,
    title: this.dto.title && this.dto.title.main,
    thumbnail: this.dto.thumbnail,
    isAdultOnly: this.dto.property && this.dto.property.isAdultOnly,
  }));

  public circleBadge = this.compose('circleBadge', circleBadge(
    getCircleBadge(this.dto),
  ));

  public hdBadge = this.compose('hdBadge', hdBadge({
    isComicHD: this.dto.file && this.dto.file.isComicHd,
  }));

  public setBooklet = this.compose('setBooklet', setBooklet(
    this.dto.setbook,
  ));
}

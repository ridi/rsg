import * as React from 'react';

import { BookState, ChildrenProps as ComponentProps, SetPlaceholder } from '../index';

import adultOnlyBadge from './adultOnlyBadge';
import circleBadge from './circleBadge';
import coverImage from './coverImage';
import hdBadge from './hdBadge';
import setBooklet from './setBooklet';
import wrapper from './wrapper';

function withDisplayName<T extends React.SFC<ComponentProps>>(name: string, Component: T): T {
  Component.displayName = `Thumbnail.${name}`;
  return Component;
}

export default class {
  constructor(
    private readonly state: BookState,
    private readonly setPlaceholder: SetPlaceholder,
  ) {}

  public wrapper = withDisplayName('wrapper', wrapper({
    className: 'RSGBookThumbnail',
    usePlaceholder: this.state.usePlaceholder,
    ...this.state.thumbnailProps.wrapper,
  }));

  public coverImage = withDisplayName('coverImage', coverImage({
    className: 'RSGBookThumbnail_CoverImage',
    setPlaceholder: this.setPlaceholder,
    ...this.state.thumbnailProps.coverImage,
  }));

  public adultOnlyBadge = withDisplayName('adultOnlyBadge', adultOnlyBadge({
    className: 'RSGBookThumbnail_AdultOnlyBadge',
    setPlaceholder: this.setPlaceholder,
    ...this.state.thumbnailProps.adultOnlyBadge,
  }));

  public circleBadge = withDisplayName('circleBadge', circleBadge({
    className: 'RSGBookThumbnail_CircleBadge',
    setPlaceholder: this.setPlaceholder,
    ...this.state.thumbnailProps.circleBadge,
  }));

  public hdBadge = withDisplayName('hdBadge', hdBadge({
    className: 'RSGBookThumbnail_HDBadge',
    setPlaceholder: this.setPlaceholder,
    ...this.state.thumbnailProps.hdBadge,
  }));

  public setBooklet = withDisplayName('setBooklet', setBooklet({
    className: 'RSGBookThumbnail_SetBooklet',
    setPlaceholder: this.setPlaceholder,
    ...this.state.thumbnailProps.setBooklet,
  }));
}

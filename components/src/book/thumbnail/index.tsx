import classNames from 'classnames';
import { upperFirst } from 'lodash-es';
import * as React from 'react';

import { ThumbnailProps } from '../dto/toProps';
import { GrandChildrenProps as ComponentProps, SetPlaceholder } from '../index';

import adultOnlyBadge from './adultOnlyBadge';
import circleBadge from './circleBadge';
import coverImage from './coverImage';
import hdBadge from './hdBadge';
import setBooklet from './setBooklet';
import wrapper from './wrapper';

export default class {
  constructor(
    private readonly props: ThumbnailProps,
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

  public wrapper = this.compose('wrapper', wrapper(this.props.wrapper));

  public coverImage = this.compose('coverImage', coverImage(this.props.coverImage));

  public adultOnlyBadge = this.compose('adultOnlyBadge', adultOnlyBadge(this.props.adultOnlyBadge));

  public circleBadge = this.compose('circleBadge', circleBadge(this.props.circleBadge));

  public hdBadge = this.compose('hdBadge', hdBadge(this.props.hdBadge));

  public setBooklet = this.compose('setBooklet', setBooklet(this.props.setBooklet));
}

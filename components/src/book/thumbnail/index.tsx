import classNames from 'classnames';
import * as React from 'react';

import { ThumbnailProps } from '../props/thumbnail';
import { CircleBadge, CircleBadgeProps } from './circleBadge';
import { Cover, CoverProps } from './coverImage';
import { HDBadge, HDBadgeProps } from './hdBadge';
import { SetBooklet, SetBookletProps } from './setBooklet';

function withDisplayName<T = {}>(name: string, Component: React.SFC<T>): React.SFC<T> {
  Component.displayName = `Thumbnail.${name}`;
  return Component;
}

export default class {
  constructor(private readonly props: ThumbnailProps) {}

  public wrapper: React.SFC<{ className?: string, thumbnailSize?: number }> = withDisplayName('wrapper', (props) => {
    const DEFAULT_SIZE = 80;
    const thumbnailWidth = props.thumbnailSize || DEFAULT_SIZE;
    const classList = [
      'RSGBookThumbnail',
      `RSGBookThumbnail-size-${ thumbnailWidth }`,
    ];
    const inlineStyleWidth = {
      width: thumbnailWidth,
    };

    return (
      <div className={classNames(classList, props.className)} style={inlineStyleWidth}>
        <div className="RSGBookThumbnail_Cell">
          {props.children}
        </div>
      </div>
    );
  });

  public coverImage: React.SFC<{ className?: string }> = withDisplayName('coverImage', () => {
    return (
      <Cover
        {...this.props}
      />
    );
  });

  public circleBadge: React.SFC<{ className?: string }> = withDisplayName('circleBadge', () => {
    return (
      <CircleBadge
        {...this.props.circleBadge}
      />
    );
  });

  public hdBadge: React.SFC<{ className?: string }> = withDisplayName('hdBadge', () => {
    return (
      <HDBadge
        isComicHD={this.props.isComicHD}
      />
    );
  });

  public setBooklet: React.SFC<{ className?: string }> = withDisplayName('setBooklet', () => {
    return (
      <SetBooklet
        {...this.props.setBooklet}
      />
    );
  });
}

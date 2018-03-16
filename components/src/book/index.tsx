import classNames from 'classnames';
import * as React from 'react';

import MetadataChildren from './metadata/';
import ThumbnailChildren from './thumbnail/';

import { BookProps, dto2props } from './props/toProps';

export interface RootComponents {
  Thumbnail: ThumbnailChildren;
  Metadata: MetadataChildren;
}

class Components {
  constructor(dto: object) {
    const { thumbnail, metadata } = dto2props(dto);
    this.Thumbnail = new ThumbnailChildren(thumbnail);
    this.Metadata = new MetadataChildren(metadata);
  }
  public Thumbnail: ThumbnailChildren;
  public Metadata: MetadataChildren;
}

export interface ComponentProps {
  dto: { id: string };
  tagName?: string;
  className?: string;
}

export const Book: React.SFC<ComponentProps & {
  children?: (Root: RootComponents) => JSX.Element;
}> = (props) => {
  const {
    dto,
    tagName: Element,
    className,
    children,
  } = props;

  if (typeof children !== 'function') {
    // tslint:disable-next-line:no-console
    console.error('Children function is required. or use a BookPresets.');
  }

  return (
    <Element
      className={classNames('RSGBook', className)}
      key={dto.id}
    >
      {children(new Components(dto))}
    </Element>
  );
};

Book.defaultProps = {
  tagName: 'div',
};

export { BookPresets } from './presets';

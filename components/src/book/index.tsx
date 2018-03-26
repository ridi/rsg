import { camelize } from '@ridi/object-case-converter';
import classNames from 'classnames';
import * as React from 'react';

import { BookDto } from './dto/';
import MetadataChildren from './metadata/';
import ThumbnailChildren from './thumbnail/';

export interface RootComponents {
  Thumbnail: ThumbnailChildren;
  Metadata: MetadataChildren;
}

class Components {
  constructor(dto: BookDto) {
    this.Thumbnail = new ThumbnailChildren(dto);
    this.Metadata = new MetadataChildren(dto);
  }
  public Thumbnail: ThumbnailChildren;
  public Metadata: MetadataChildren;
}

export interface ComponentProps {
  dto: BookDto & { id: string };
  tagName?: string;
  className?: string;
}

export const Book: React.SFC<ComponentProps & {
  children: (Root: RootComponents) => JSX.Element;
}> = (props) => {
  const {
    tagName: Element,
    className,
    children,
  } = props;

  if (typeof children !== 'function') {
    // tslint:disable-next-line:no-console
    console.error('Children function is required. or use a BookPresets.');
  }

  const dto: BookDto = camelize(props.dto, { recursive: true });

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

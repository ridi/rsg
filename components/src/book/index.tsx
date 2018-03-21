import { camelize } from '@ridi/object-case-converter';
import classNames from 'classnames';
import * as React from 'react';

import { BookDto } from './dto/dto';
import MetadataChildren from './metadata/';
import ThumbnailChildren from './thumbnail/';

export interface RootComponents {
  Thumbnail: ThumbnailChildren;
  Metadata: MetadataChildren;
}

class Components {
  constructor(dto: Partial<BookDto>) {
    const camelizedDto: Partial<BookDto> = camelize(dto, { recursive: true });
    this.Thumbnail = new ThumbnailChildren(camelizedDto);
    this.Metadata = new MetadataChildren(camelizedDto);
  }
  public Thumbnail: ThumbnailChildren;
  public Metadata: MetadataChildren;
}

export interface ComponentProps {
  dto: Partial<BookDto> & { id: string };
  tagName?: string;
  className?: string;
}

export const Book: React.SFC<ComponentProps & {
  children: (Root: RootComponents) => JSX.Element;
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

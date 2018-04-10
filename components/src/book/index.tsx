import { camelize } from '@ridi/object-case-converter';
import classNames from 'classnames';
import * as React from 'react';

import { BookDto } from './dto/index';
import dto2props, { MetadataProps, ThumbnailProps } from './dto/toProps';
import MetadataChildren from './metadata/index';
import ThumbnailChildren from './thumbnail/index';

export type SetPlaceholder = (
  isRequired: boolean,
  ...requirements: boolean[],
) => React.SFC<{ className: string }>;

export interface ChildComponents {
  Thumbnail: ThumbnailChildren;
  Metadata: MetadataChildren;
}

export interface ChildrenProps {
  className?: string;
  required?: boolean;
  dataset?: { [key: string]: string };
}
export interface ChildrenData {
  className: string;
  readonly setPlaceholder: SetPlaceholder;
  readonly usePlaceholder?: BookState['usePlaceholder'];
}

export interface BookComponentProps {
  dto: BookDto & { id: string };
  tagName?: string;
  className?: string;
  style?: React.CSSProperties;
  children: (Root: ChildComponents) => JSX.Element;
}

export interface BookState {
  thumbnailProps: ThumbnailProps;
  metadataProps: MetadataProps;
  usePlaceholder: boolean;
}

export class Book extends React.Component<BookComponentProps, BookState> {
  constructor(props: BookComponentProps) {
    super(props);
    const dto: BookDto = camelize(this.props.dto, { recursive: true });
    const { thumbnailProps, metadataProps } = dto2props(dto);
    this.state = {
      usePlaceholder: false,
      thumbnailProps,
      metadataProps,
    };
  }

  private setPlaceholder: SetPlaceholder = (isRequired, ...requirements) => {
    if (this.state.usePlaceholder) {
      if (isRequired) {
        return ({ className }) => {
          const computedClassName = classNames(className, `${className}-placeholder`, 'RSGBook_Placeholder');
          return <div className={computedClassName}></div>;
        };
      }
      return () => null;
    } else if (requirements.length && requirements.every((item) => item)) {
      if (isRequired) {
        this.setState({ usePlaceholder: true });
      }
      return () => null;
    }
    return null;
  }

  public render() {
    const {
      tagName: Element,
      className,
      style,
      children,
    } = this.props;

    if (typeof children !== 'function') {
      // tslint:disable-next-line:no-console
      console.error('Children function is required. or use a BookPresets.');
      return null;
    }

    return (
      <Element
        className={classNames('RSGBook', className)}
        key={this.props.dto.id}
        style={style}
      >
        {children({
          Thumbnail: new ThumbnailChildren(this.state, this.setPlaceholder),
          Metadata: new MetadataChildren(this.state, this.setPlaceholder),
        })}
      </Element>
    );
  }

  public static defaultProps: Partial<BookComponentProps> = {
    tagName: 'div',
  };
}

import Landscape from './presets/landscape';
import Portrait from './presets/portrait';

export const BookPresets = {
  Portrait,
  Landscape,
};

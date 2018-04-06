import { camelize } from '@ridi/object-case-converter';
import classNames from 'classnames';
import * as React from 'react';

import { BookDto } from './dto/index';
import dto2props from './dto/toProps';
import MetadataChildren from './metadata/index';
import ThumbnailChildren from './thumbnail/index';

export type SetPlaceholder = (arg: { className: string }) => (
  isRequired: boolean,
  ...requirements: boolean[],
) => React.SFC<{}>;

export interface ChildComponents {
  Thumbnail: ThumbnailChildren;
  Metadata: MetadataChildren;
}

export type GrandChildrenProps = {
  readonly setPlaceholder?: ReturnType<SetPlaceholder>;
  className?: string;
  required?: boolean;
  dataset?: { [key: string]: string }
};

export interface BookComponentProps {
  dto: BookDto & { id: string };
  tagName?: string;
  className?: string;
  children: (Root: ChildComponents) => JSX.Element;
}

export interface BookState {
  usePlaceholder: boolean;
}

export class Book extends React.Component<BookComponentProps, BookState> {
  constructor(props: BookComponentProps) {
    super(props);
    this.state = { usePlaceholder: false };
  }

  private setPlaceholder: SetPlaceholder = ({ className }) => (isRequired, ...requirements) => {
    const isLack = requirements.length && requirements.every((item) => item);
    if (isRequired) {
      if (this.state.usePlaceholder) {
        return () => <div className={classNames(className, 'RSGBook_Placeholder')}></div>;
      } else if (isLack) {
        this.setState({ usePlaceholder: true });
      }
    }
    if (isLack) { return () => null; }
    return null;
  }

  public render() {
    const {
      tagName: Element,
      className,
      children,
    } = this.props;

    if (typeof children !== 'function') {
      // tslint:disable-next-line:no-console
      console.error('Children function is required. or use a BookPresets.');
      return null;
    }

    const dto: BookDto = camelize(this.props.dto, { recursive: true });
    const { thumbnailProps, metadataProps } = dto2props(dto, this.state);

    return (
      <Element
        className={classNames(
          'RSGBook',
          { 'RSGBook-placeholder': this.state.usePlaceholder },
          className,
        )}
        key={dto.id}
      >
        {children({
          Thumbnail: new ThumbnailChildren(thumbnailProps, this.setPlaceholder),
          Metadata: new MetadataChildren(metadataProps, this.setPlaceholder),
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

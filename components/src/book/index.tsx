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
    if (isRequired) {
      if (this.state.usePlaceholder) {
        return () => <div className={classNames(className, 'RSGBook_Placeholder')}></div>;
      } else if (requirements.length && requirements.every((item) => item)) {
        this.setState({ usePlaceholder: true });
      }
    }
    return null;
  }

  private getChildren(dto: BookDto): ChildComponents {
    const { thumbnailProps, metadataProps } = dto2props(dto);
    const Thumbnail = new ThumbnailChildren(thumbnailProps, this.setPlaceholder);
    const Metadata = new MetadataChildren(metadataProps, this.setPlaceholder);
    return { Thumbnail, Metadata };
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

    return (
      <Element
        className={classNames('RSGBook', { 'RSGBook-placeholder': this.state.usePlaceholder }, className)}
        key={dto.id}
      >
        {children(this.getChildren(dto))}
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

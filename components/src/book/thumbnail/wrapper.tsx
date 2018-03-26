import classNames from 'classnames';
import * as React from 'react';

export type ComponentProps = {
  className?: string;
  thumbnailSize?: number;
};

const DEFAULT_SIZE = 80;

export default function(): React.SFC<ComponentProps> {
  return (props) => {
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
  };
}

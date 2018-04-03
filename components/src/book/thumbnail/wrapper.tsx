import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

const DEFAULT_SIZE = 80;

export default (): React.SFC<Pick<ComponentProps, 'className'> & {
  thumbnailSize?: number;
}> => (props) => {
  const thumbnailWidth = props.thumbnailSize || DEFAULT_SIZE;
  const classList = [
    'RSGBookThumbnail',
    `RSGBookThumbnail-size-${thumbnailWidth}`,
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

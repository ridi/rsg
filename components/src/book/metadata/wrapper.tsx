import classNames from 'classnames';
import * as React from 'react';

export type ComponentProps = {
  className?: string;
  layout?: string;
  width?: number;
};

const DEFAULT_LAYOUT = 'portrait';

export default function(): React.SFC<ComponentProps> {
  return (props) => {
    const layout = props.layout || DEFAULT_LAYOUT;
    const metadataWidth = props.width || 'auto';
    const inlineStyleWidth = {
      width: metadataWidth,
    };
    const metadataClassNames = [
      'RSGBookMetadata',
      `RSGBookMetadata-layout-${layout}`,
      `RSGBookMetadata-width-${metadataWidth}`,
    ];

    return (
      <div
        className={classNames(metadataClassNames, props.className)}
        style={inlineStyleWidth}
      >
          {props.children}
      </div>
    );
  };
}

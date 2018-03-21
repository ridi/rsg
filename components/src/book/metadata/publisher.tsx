import classNames from 'classnames';
import * as React from 'react';

export interface PublisherProps {
  id: number;
  name: string;
}

export type ComponentProps = {
  className?: string;
};

export default function(props: PublisherProps): React.SFC<ComponentProps> {
  return ({ className }) => (
    <p className={classNames('RSGBookMetadata_Publisher', className)}>
      {props.name}
    </p>
  );
}

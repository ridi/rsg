import classNames from 'classnames';
import * as React from 'react';

export interface Description {
  description: string;
}

export type ComponentProps = {
  className?: string;
};

export default function({ description }: Description): React.SFC<ComponentProps> {
  return ({ className }) => description ? (
    <p className={classNames('RSGBookMetadata_Description', className)}>
      {description}
    </p>
  ) : null;
}

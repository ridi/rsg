import classNames from 'classnames';
import * as React from 'react';

export interface DescriptionProps {
  description: string;
}

export type ComponentProps = {
  className?: string;
};

export default function({ description }: DescriptionProps): React.SFC<ComponentProps> {
  return ({ className }) => (
    <p className={classNames('RSGBookMetadata_Description', className)}>
      {description}
    </p>
  );
}

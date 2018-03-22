import classNames from 'classnames';
import * as React from 'react';

export interface SomedealBadge {
  isSomedeal: boolean;
}

export type ComponentProps = {
  className?: string;
};

export default function({ isSomedeal }: SomedealBadge): React.SFC<ComponentProps> {
  return ({ className }) => isSomedeal ? (
    <p className={classNames(
      'RSGBookMetadata_Badge',
      'RSGBookMetadata_Badge-type-somedeal',
      className,
    )}>
      썸딜도서
    </p>
  ) : null;
}

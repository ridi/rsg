import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface SomedealBadge {
  isSomedeal: boolean;
}

export default ({ isSomedeal }: SomedealBadge): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder />; }

  return isSomedeal ? (
    <p className={classNames(
      'RSGBookMetadata_Badge',
      'RSGBookMetadata_Badge-type-somedeal',
      className,
    )}>
      썸딜도서
    </p>
  ) : null;
};

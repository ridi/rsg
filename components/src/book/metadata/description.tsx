import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface Description {
  description: string;
}

export default ({ description }: Description): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required, !description);
  if (Placeholder) { return <Placeholder />; }

  return description ? (
    <p className={classNames('RSGBookMetadata_Description', className)}>
      {description}
    </p>
  ) : null;
};

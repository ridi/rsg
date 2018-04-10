import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface Publisher {
  name: string;
  link: string;
}

export default ({ name, link }: Publisher = {} as Publisher): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required, !name);
  if (Placeholder) { return <Placeholder />; }

  return name ? (
    <p className={classNames('RSGBookMetadata_Publisher', className)}>
      <a href={link}>{name}</a>
    </p>
  ) : null;
};

import classNames from 'classnames';
import * as React from 'react';

export interface Publisher {
  name: string;
  link: string;
}

export type ComponentProps = {
  className?: string;
};

export default function({ name, link }: Publisher = {} as Publisher): React.SFC<ComponentProps> {
  return ({ className }) => name ? (
    <p className={classNames('RSGBookMetadata_Publisher', className)}>
      <a href={link}>{name}</a>
    </p>
  ) : null;
}

import classNames from 'classnames';
import * as React from 'react';

export interface Title {
  title: string;
  link: string;
}

export type ComponentProps = {
  className?: string;
};

export default function({ title, link }: Title): React.SFC<ComponentProps> {
  return ({ className }) => title ? (
    <a href={link}>
      <p className={classNames(['RSGBookMetadata_Title', className])}>
        {title}
      </p>
    </a>
  ) : null;
}

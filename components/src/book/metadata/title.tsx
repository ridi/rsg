import classNames from 'classnames';
import * as React from 'react';

export interface TitleProps {
  title: string;
  link: string;
}

export type ComponentProps = {
  className?: string;
};

export default function({ title, link }: TitleProps): React.SFC<ComponentProps> {
  return ({ className }) => (
    <a href={link}>
      <p className={classNames(['RSGBookMetadata_Title', className])}>
        {title}
      </p>
    </a>
  );
}

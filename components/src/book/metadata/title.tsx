import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface Title {
  title: string;
  link: string;
}

export default ({ title, link }: Title): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required, !title);
  if (Placeholder) { return <Placeholder />; }

  return title ? (
    <a href={link}>
      <p className={classNames(['RSGBookMetadata_Title', className])}>
        {title}
      </p>
    </a>
  ) : null;
};

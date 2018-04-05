import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';
import handleDataset from '../utils/dataset';

export interface Title {
  title: string;
  link: string;
}

export default ({ title, link }: Title): React.SFC<ComponentProps> => (props) => {
  const { className, dataset, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required, !title);
  if (Placeholder) { return <Placeholder />; }

  return title ? (
    <a href={link} className={className} {...handleDataset(dataset)}>
      <p className="RSGBookMetadata_Title">
        {title}
      </p>
    </a>
  ) : null;
};

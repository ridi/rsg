import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

import handleDataset from '../utils/dataset';

export interface Title {
  title: string;
  link: string;
}

export default (data: Data & Title): React.SFC<ComponentProps & {
  link?: 'unused',
}> => (props) => {
  const { className, dataset } = props;

  const Placeholder = data.setPlaceholder(props.required, !data.title);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return props.link !== 'unused' ? (
    <a
      href={data.link}
      className={classNames(data.className, className)}
      {...handleDataset(dataset)}
    >
      {data.title}
    </a>
  ) : (
    <p className="RSGBookMetadata_Title">
      {data.title}
    </p>
  );
};

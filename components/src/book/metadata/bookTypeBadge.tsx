import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

export interface BookTypeBadge {
  isNovel: boolean;
  isComic: boolean;
}

const NOVEL = { type: 'novel', label: '소설' };
const COMIC = { type: 'comic', label: '만화' };

export default (data: Data & BookTypeBadge): React.SFC<ComponentProps> => (props) => {
  const { isNovel, isComic } = data;
  const { className } = props;
  const { type, label } = isNovel ? NOVEL : isComic ? COMIC : { type: false, label: '' };

  const Placeholder = data.setPlaceholder(false, !type);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <p className={classNames(
      data.className,
      `${data.className}-type-${type}`,
      className,
    )}>
      {label}
    </p>
  );
};

import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface BookTypeBadge {
  isNovel: boolean;
  isComic: boolean;
}

const NOVEL = { type: 'novel', label: '소설' };
const COMIC = { type: 'comic', label: '만화' };

export default ({ isNovel, isComic }: BookTypeBadge): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;
  const { type, label } = isNovel ? NOVEL : isComic ? COMIC : { type: false, label: '' };

  const Placeholder = setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder />; }

  return type ? (
    <p className={classNames(
      'RSGBookMetadata_Badge',
      `RSGBookMetadata_Badge-type-${type}`,
      className,
    )}>
      {label}
    </p>
  ) : null;
};

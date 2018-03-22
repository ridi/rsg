import classNames from 'classnames';
import * as React from 'react';

export interface BookTypeBadge {
  isNovel: boolean;
  isComic: boolean;
}

export type ComponentProps = {
  className?: string;
};

const NOVEL = { type: 'novel', label: '소설' };
const COMIC = { type: 'comic', label: '만화' };

export default function({ isNovel, isComic }: BookTypeBadge): React.SFC<ComponentProps> {
  const { type, label } = isNovel ? NOVEL : isComic ? COMIC : { type: false, label: '' };
  return ({ className }) => type ? (
    <p className={classNames(
      'RSGBookMetadata_Badge',
      `RSGBookMetadata_Badge-type-${type}`,
      className,
    )}>
      {label}
    </p>
  ) : null;
}

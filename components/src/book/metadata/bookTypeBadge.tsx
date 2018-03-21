import classNames from 'classnames';
import * as React from 'react';

export interface BookTypeBadgeProps {
  isNovel: boolean;
  isComic: boolean;
}

export type ComponentProps = {
  className?: string;
};

export default function({ isNovel, isComic }: BookTypeBadgeProps = {} as BookTypeBadgeProps): React.SFC<ComponentProps> {
  return ({ className }) => (
    <>
      {isNovel && (
        <p className={classNames(
          'RSGBookMetadata_Badge',
          'RSGBookMetadata_Badge-type-novel',
          className,
        )}>
          소설
        </p>
      )}
      {isComic && (
        <p className={classNames(
          'RSGBookMetadata_Badge',
          'RSGBookMetadata_Badge-type-comic',
          className,
        )}>
          만화
        </p>
      )}
    </>
  );
}

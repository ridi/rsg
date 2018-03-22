import classNames from 'classnames';
import * as React from 'react';

export interface SubTitle {
  subTitle: string;
}

export type ComponentProps = {
  className?: string;
};

export default function({ subTitle }: SubTitle): React.SFC<ComponentProps> {
  return ({ className }) => subTitle ? (
    <p className={classNames(['RSGBookMetadata_SubTitle', className])}>
      {subTitle}
    </p>
  ) : null;
}

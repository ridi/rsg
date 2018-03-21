import classNames from 'classnames';
import * as React from 'react';

export interface SubTitleProps {
  subTitle: string;
}

export type ComponentProps = {
  className?: string;
};

export default function({ subTitle }: SubTitleProps): React.SFC<ComponentProps> {
  return ({ className }) => (
    <p className={classNames(['RSGBookMetadata_SubTitle', className])}>
      {subTitle}
    </p>
  );
}

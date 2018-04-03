import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface SubTitle {
  subTitle: string;
}

export default ({ subTitle }: SubTitle): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required, !subTitle);
  if (Placeholder) { return <Placeholder />; }

  return subTitle ? (
    <p className={classNames(['RSGBookMetadata_SubTitle', className])}>
      {subTitle}
    </p>
  ) : null;
};

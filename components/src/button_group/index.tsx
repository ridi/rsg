import classNames from 'classnames';
import * as React from 'react';

export interface ButtonGroupProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  collapse?: boolean;
  children: React.ReactChildren;
}

export const ButtonGroup: React.SFC<ButtonGroupProps> = (props) => {
  const {
    className,
    orientation = 'horizontal',
    collapse = false,
    children,
  } = props;

  return (
    <div
      className={classNames([
        'THRButtonGroup',
        `THRButtonGroup-${orientation}`,
        `THRButtonGroup-${collapse ? 'collapsed' : ''}`,
        className,
      ])}
    >
      {children}
    </div>
  );
};

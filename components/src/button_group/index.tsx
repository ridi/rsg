import classNames from 'classnames';
import * as React from 'react';

export interface ButtonGroupProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  component?: React.ReactType;
}

export const ButtonGroup: React.SFC<ButtonGroupProps> = (props) => {
  const {
    className,
    orientation = 'horizontal',
    component,
    children,
  } = props;

  const Wrapper = component || 'div';

  return (
    <Wrapper className={classNames([
      'THRButtonGroup',
      `THRButtonGroup-${orientation}`,
      className,
    ])}>
      {children}
    </Wrapper>
  );
};

import classNames from 'classnames';
import * as React from 'react';

export interface ButtonProps {
  color?: 'gray' | 'blue' | 'brown';
  size?: 'small' | 'medium' | 'large';
  outline?: boolean;
  thickBorderWidth?: boolean;
  disabled?: boolean;
  spinner?: boolean;
  component?: React.ReactType<ButtonProps>;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent<any>) => void;
}

export const Button: React.SFC<ButtonProps> = <P extends ButtonProps>(props: P) => {
  const {
    color = 'gray',
    size = 'medium',
    outline,
    thickBorderWidth,
    spinner,
    disabled,
    component,
    href,
    className,
    children,
    onClick,
    ...extraProps,
  } = props as ButtonProps;

  let Wrapper;
  if (component) {
    Wrapper = component;
  } else if (href) {
    Wrapper = 'a';
  } else {
    Wrapper = 'button';
  }

  return (
    <Wrapper
      className={classNames([
        'THRButton',
        `THRButton-color-${color}`,
        `THRButton-size-${size}`,
        outline && 'THRButton-outline',
        thickBorderWidth && 'THRButton-borderWidth-thick',
        spinner && 'THRButton-spinner',
        className,
      ])}
      disabled={disabled}
      onClick={onClick}
      href={href}
      {...extraProps}
    >
      {children}
    </Wrapper>
  );
};

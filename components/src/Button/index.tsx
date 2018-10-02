import classNames from 'classnames';
import * as React from 'react';

export interface ButtonProps {
  color?: 'gray' | 'blue' | 'brown';
  size?: 'small' | 'medium' | 'large';
  outline?: boolean;
  thickBorderWidth?: boolean;
  disabled?: boolean;
  spinner?: boolean;
  component?: React.ReactType;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent<any>) => void;
  [extraKey: string]: any;
}

export const Button: React.SFC<ButtonProps> = (props) => {
  const {
    color = 'gray',
    size = 'medium',
    outline,
    thickBorderWidth,
    spinner,
    disabled,
    component,
    className,
    children,
    onClick,
    ...extraProps,
  } = props;

  const Wrapper = component || 'button';

  return (
    <Wrapper
      className={classNames([
        'RUIButton',
        `RUIButton-color-${color}`,
        `RUIButton-size-${size}`,
        outline && 'RUIButton-outline',
        thickBorderWidth && 'RUIButton-borderWidth-thick',
        spinner && 'RUIButton-spinner',
        className,
      ])}
      disabled={disabled}
      onClick={onClick}
      {...extraProps}
    >
      {children}
    </Wrapper>
  );
};

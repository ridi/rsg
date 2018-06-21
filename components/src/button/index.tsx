import classNames from 'classnames';
import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'Element': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export interface ButtonProps {
  color?: 'gray' | 'blue' | 'brown';
  size?: 'small' | 'medium' | 'large';
  outline?: boolean;
  thickBorderWidth?: boolean;
  disabled?: boolean;
  spinner?: boolean;
  wrapperElement?: string;
  className?: string;
  children?: React.ReactElement<any> | string;
  onClick?: (e: React.SyntheticEvent<any>) => void;
  wrapperProps?: any;
}

export const Button: React.SFC<ButtonProps> = (props) => {
  const {
    color = 'gray',
    size = 'medium',
    outline,
    thickBorderWidth,
    spinner,
    disabled,
    wrapperElement = 'button',
    className,
    children,
    onClick,
    wrapperProps,
  } = props;
  const Element = wrapperElement;
  return (
    <Element
      {...wrapperProps}
      className={classNames([
        'RUIButton',
        `RUIButton-color-${color}`,
        `RUIButton-size-${size}`,
        outline && 'RUIButton-outline',
        thickBorderWidth && 'RUIButton-borderWidth-thick',
        spinner && 'RUIButton_Spinner',
        className,
      ])}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Element>
  );
};

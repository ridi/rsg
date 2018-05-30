import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';

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
  tagName?: string;
  className?: string;
  children?: React.ReactElement<any> | string;
  onClick?: (e: React.SyntheticEvent<any>) => void;
}

export const Button: React.SFC<ButtonProps> = (props) => {
  const {
    color = 'gray',
    size = 'medium',
    outline,
    thickBorderWidth,
    tagName = 'button',
    className,
    children,
    onClick,
  } = props;
  const Element = tagName;
  return (
    <Element
      className={classNames([
        'RUIButton',
        `RUIButton-color-${color}`,
        `RUIButton-size-${size}`,
        outline && 'RUIButton-outline',
        thickBorderWidth && 'RUIButton-borderWidth-thick',
        className,
      ])}
      onClick={onClick}
    >
      {children}
    </Element>
  );
};

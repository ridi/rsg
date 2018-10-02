import classNames from 'classnames';
import * as React from 'react';

export interface RadioProps {
  checked: boolean;
  children?: string;
  className?: string;
  disabled?: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Radio: React.SFC<RadioProps> = (props) => {
  const {
    checked,
    children,
    className,
    disabled,
    value,
    onChange,
  } = props;
  return (
    <label className={classNames('RUIRadio', className)}>
      <input
        type="radio"
        className="RUIRadio_Input"
        checked={checked}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
      <span className="RUIRadio_Label">
        <span className="RUIRadio_Icon" />
        {children}
      </span>
    </label>
  );
};

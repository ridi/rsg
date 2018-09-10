import { Icon } from '@ridi/rsg';
import * as React from 'react';

export interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  children?: string;
}

export const Checkbox: React.SFC<CheckboxProps> = (props) => {
  const {
    checked,
    onChange,
    disabled,
    children,
    className,
  } = props;
  return (
    <label className={`RUICheckbox ${className}`}>
      <input
        type="checkbox"
        className="RUICheckbox_Input"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="RUICheckbox_Label">
        <Icon
          name="check_1"
          className="RUICheckbox_SVGIcon"
        />
        {children}
      </span>
    </label>
  );
};

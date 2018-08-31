import { Icon } from '@ridi/rsg';
import * as React from 'react';

export interface CheckBoxProps {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  children?: string;
}

export const CheckBox: React.SFC<CheckBoxProps> = (props) => {
  const {
    checked,
    onChange,
    disabled,
    children,
    className,
  } = props;
  return (
    <label className={`RUICheckBox ${className}`}>
      <input
        type="checkbox"
        className="RUICheckBox_Input"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="RUICheckBox_Label">
        <Icon
          name="check_1"
          className="RUICheckBox_SVGIcon"
        />
        {children}
      </span>
    </label>
  );
};

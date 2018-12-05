import { Icon } from '@ridi/rsg';
import classNames from 'classnames';
import * as React from 'react';

export interface CheckboxProps {
  checked: boolean;
  onChange: (e: React.SyntheticEvent<any>) => void;
}

export const Checkbox: React.SFC<CheckboxProps> = (props) => {
  const {
    checked,
    onChange,
  } = props;

  return (
    <label className={classNames(['Checkbox', checked && 'active'])}>
      <input
        className="Checkbox_Input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="Checkbox_IconWrapper">
        <Icon className="Checkbox_Icon" name="check_5">
          도서 선택
        </Icon>
      </span>
    </label>
  );
};

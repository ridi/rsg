import { Icon } from '@ridi/rsg';
import classNames from 'classnames';
import * as React from 'react';

export interface SelectBoxProps {
  title: string;
  className?: string;
  disabled?: boolean;
  renderOutline?: boolean;
  value?: string | string[];
  isMultiple?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectBox: React.SFC<SelectBoxProps> = (props) => {
  const {
    title,
    className,
    disabled = false,
    renderOutline = false,
    onChange,
    children,
    value,
    isMultiple = false,
  } = props;
  return (
    <div className={classNames([
      'RUISelectBox',
      renderOutline && 'RUISelectBox-outline',
      className,
    ])}>
      <select
        title={title}
        className="RUISelectBox_Select"
        disabled={disabled}
        onChange={onChange}
        value={value}
        multiple={isMultiple}
      >
        {children}
      </select>
      <Icon className="RUISelectBox_Icon" name="arrow_1_down" />
    </div>
  );
};

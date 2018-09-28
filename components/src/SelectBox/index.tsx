import { Icon } from '@ridi/rsg';
import classNames from 'classnames';
import * as React from 'react';

export interface SelectBoxProps {
  title: string;
  disabled?: boolean;
  renderOutline?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectBox: React.SFC<SelectBoxProps> = (props) => {
  const {
    title,
    disabled = false,
    renderOutline = false,
    onChange,
    children,
  } = props;
  return (
    <div className={classNames(['RUISelectBox', renderOutline && 'RUISelectBox-outline'])}>
      <select
        title={title}
        className="RUISelectBox_Select"
        disabled={disabled}
        onChange={onChange}
      >
        {children}
      </select>
      <Icon className="RUISelectBox_Icon" name="arrow_1_down" />
    </div>
  );
};

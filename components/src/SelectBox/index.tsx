import { Icon } from '@ridi/rsg';
import * as React from 'react';

export interface SelectBoxProps {
  title: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectBox: React.SFC<SelectBoxProps> = (props) => {
  const { title, disabled, children, onChange } = props;
  return (
    <div className="RUISelectBox">
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

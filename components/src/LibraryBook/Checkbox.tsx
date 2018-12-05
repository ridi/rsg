import { Icon } from '@ridi/rsg';
import classNames from 'classnames';
import * as React from 'react';

export interface SelectProps {
  selectMode: boolean;
  selected: boolean;
  onSelected: (e: React.SyntheticEvent<any>) => void;
}

export const Checkbox: React.SFC<SelectProps> = (props) => {
  const {
    selectMode,
    selected,
    onSelected,
  } = props;

  return selectMode ? (
    <label className={classNames(['Checkbox', selected && 'active'])}>
      <input
        className="Checkbox_Input"
        type="checkbox"
        checked={selected}
        onChange={onSelected}
      />
      <span className="Checkbox_IconWrapper">
        <Icon className="Checkbox_Icon" name="check_5">
          도서 선택
        </Icon>
      </span>
    </label>
  ) : null;
};

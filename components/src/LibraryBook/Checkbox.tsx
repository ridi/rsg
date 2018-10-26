import * as React from 'react';

export interface SelectProps {
  selectMode: boolean;
  selected: boolean;
  onSelected: () => void;
}

export const Checkbox: React.SFC<SelectProps> = (props) => {
  const {
    selectMode,
    selected,
    onSelected,
  } = props;
  return selectMode ? (
    <label>
      <input
        type="checkbox"
        checked={selected}
        onClick={() => {onSelected(); }}
      />
      선택
    </label>
  ) : null;
};

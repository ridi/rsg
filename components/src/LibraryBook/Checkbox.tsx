import * as React from 'react';

export interface SelectProps {
  editMode: boolean;
  selected: boolean;
  onSelected: () => void;
}

export const Checkbox: React.SFC<SelectProps> = (props) => {
  const {
    editMode,
    selected,
    onSelected,
  } = props;
  return editMode ? (
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

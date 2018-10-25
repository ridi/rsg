import * as React from 'react';

export interface SelectProps {
  editMode?: boolean;
  selected?: boolean;
  onSelected?: () => void;
}

export const Checkbox: React.SFC = () => (
  <label><input type="checkbox"/>선택</label>
);

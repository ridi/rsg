import classNames from 'classnames';
import * as React from 'react';

export interface CheckboxProps {
  checked: boolean;
  className?: string;
  component?: React.ReactType<CheckboxProps>;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [extraKey: string]: any;
}

export const Checkbox: React.SFC<CheckboxProps> = (props) => {
  const {
    checked,
    className,
    component,
    disabled,
    onChange,
    ...extraProps,
  } = props;

  const Wrapper = component || 'input';

  return (
    <Wrapper
      type="checkbox"
      className={classNames('THRCheckbox', className)}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      {...extraProps}
    />
  );
};

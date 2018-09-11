import classNames from 'classnames';
import * as React from 'react';

export interface CheckboxProps {
  className?: string;
  component?: React.ReactType<CheckboxProps>;
  [extraKey: string]: any;
}

export const Checkbox: React.SFC<CheckboxProps> = (props) => {
  const {
    className,
    component,
    ...extraProps,
  } = props;

  const Wrapper = component || 'input';

  return (
    <Wrapper
      type="checkbox"
      className={classNames('THRCheckbox', className)}
      {...extraProps}
    />
  );
};

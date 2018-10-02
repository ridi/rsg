import classNames from 'classnames';
import * as React from 'react';

export interface TextInputProps {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  type?: string;
  [extraKey: string]: any;
}

export const TextInput: React.SFC<TextInputProps> = (props) => {
  const {
    className,
    disabled = false,
    placeholder,
    type = 'text',
    ...extraProps,
  } = props;

  return (
    <input
      className={classNames(
        'RUITextInput',
        className,
      )}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      {...extraProps}
    />
  );
};

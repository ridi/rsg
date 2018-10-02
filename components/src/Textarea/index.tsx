import classNames from 'classnames';
import * as React from 'react';

export interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  [extraKey: string]: any;
}

export const Textarea: React.SFC<TextareaProps> = (props) => {
  const {
    className,
    disabled = false,
    placeholder,
    ...extraProps,
  } = props;

  return (
    <textarea
      className={classNames(
        'RUITextarea',
        className,
      )}
      disabled={disabled}
      placeholder={placeholder}
      {...extraProps}
    />
  );
};

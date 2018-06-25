import classNames from 'classnames';
import * as React from 'react';
import { Icon } from '../../src/icon';

export interface FetchRetryBlockProps {
  title?: string;
  description?: string;
  buttonClassName?: string;
  onRetry: () => void;
}

export const FetchRetryBlock: React.SFC<FetchRetryBlockProps> = ({
  title,
  description = '다시 시도해주세요.',
  buttonClassName,
  onRetry,
}) => {
  return (
    <div className="FetchErrorBlock">
      {title && <p className="FetchErrorBlock_Title">{title}</p>}
      <p className="FetchErrorBlock_Description">{description}</p>
      <button
        className={classNames(
          'rui_button_white_40',
          'FetchErrorBlock_RetryButton',
          buttonClassName,
        )}
        onClick={onRetry}
      >
        <p className="rui_button_contents">
          <span className="rui_button_icon">
            <Icon
              name="redo_1"
              className="FetchErrorBlock_RetryButton_Icon"
            />
          </span>
          <span className="rui_button_text">다시 시도</span>
        </p>
      </button>
    </div>
  );
};

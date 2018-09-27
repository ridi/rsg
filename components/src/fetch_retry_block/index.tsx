import { Button, Icon } from '@ridi/rsg';
import classNames from 'classnames';
import * as React from 'react';

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
    <div className="RUIFetchRetryBlock">
      {title && <p className="RUIFetchRetryBlock_Title">{title}</p>}
      <p className="RUIFetchRetryBlock_Description">{description}</p>
      <Button
        className={classNames(
          'RUIFetchRetryBlock_RetryButton',
          buttonClassName,
        )}
        size="large"
        outline
        onClick={onRetry}
      >
        <Icon
          name="redo_1"
          className="RUIFetchRetryBlock_RetryButton_Icon"
        />
        다시 시도
      </Button>
    </div>
  );
};

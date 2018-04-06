import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface AdultOnlyBadge {
  isAdultOnly: boolean;
}

export default (data: AdultOnlyBadge): React.SFC<ComponentProps & {
}> => (props) => {
  const { setPlaceholder, className } = props;

  const adultOnlyBadgeClassName = classNames(
    'RSGBookThumbnail_AdultOnlyBadge',
    { 'RSGBookThumbnail_AdultOnlyBadge-small': false }, // thumbnailWidth 에 따라 조절
  );

  return data.isAdultOnly ? (
    <span className={adultOnlyBadgeClassName}>19세 미만 구독불가</span>
  ) : null;
};

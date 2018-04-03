import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface HDBadge {
  isComicHD: boolean;
}

export default ({ isComicHD }: HDBadge): React.SFC<ComponentProps> => (props) => {
  const { className } = props;

  return isComicHD ? (
    <div className={classNames('RSGBookThumbnail_HDBadge', className)}>
      <p className="HDBadge_Label">고화질</p>
    </div>
  ) : null;
};

import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface SetBooklet {
  memberBooksCount: number;
  calculationPolicy: number;
}

export default (data: SetBooklet = {} as SetBooklet): React.SFC<ComponentProps> => (props) => {
  const { className } = props;

  return data.memberBooksCount > 0 ? (
    <div className={classNames('RSGBookThumbnail_SetBooklet', className)}>
      <p className="SetBooklet_Label">
        <span className="SetBooklet_Count">{data.memberBooksCount}</span>권 세트
      </p>
    </div>
  ) : null;
};

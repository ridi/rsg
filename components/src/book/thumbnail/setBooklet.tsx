import * as React from 'react';

export interface SetBooklet {
  memberBooksCount: number;
  calculationPolicy: number;
}

export type ComponentProps = {
  className?: string;
};

export default function(data: SetBooklet = {} as SetBooklet): React.SFC<ComponentProps> {
  return ({ className }) => (
    data.memberBooksCount > 0 ? (
      <div className="RSGBookThumbnail_SetBooklet">
        <p className="SetBooklet_Label">
          <span className="SetBooklet_Count">{data.memberBooksCount}</span>권 세트
        </p>
      </div>
    ) : null
  );
}

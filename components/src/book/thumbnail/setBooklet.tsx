import * as React from 'react';

export interface SetBookletProps {
  memberBooksCount: number
  calculationPolicy: number
}

const SetBooklet: React.SFC<SetBookletProps> = (props) => (props.memberBooksCount > 0 &&
  <div className="RSGBookThumbnail_SetBooklet">
    <p className="SetBooklet_Label">
      <span className="SetBooklet_Count">{props.memberBooksCount}</span>권 세트
    </p>
  </div>
)

export { SetBooklet }

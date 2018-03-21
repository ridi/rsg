import * as React from 'react';

export interface SetBookletProps {
  memberBooksCount: number;
  calculationPolicy: number;
}

export type ComponentProps = {
  className?: string;
};

export default function(props: SetBookletProps): React.SFC<ComponentProps> {
  return ({ className }) => (
    props.memberBooksCount > 0 && (
      <div className="RSGBookThumbnail_SetBooklet">
        <p className="SetBooklet_Label">
          <span className="SetBooklet_Count">{props.memberBooksCount}</span>권 세트
        </p>
      </div>
    )
  );
}

import classNames from 'classnames';
import * as React from 'react';

export type ComponentProps = {
  className?: string;
};

export default function(): React.SFC<ComponentProps> {
  return ({ className }) => (
    <p className={classNames('RSGBookMetadata_Flatrate', className)}>
      자유이용권<span className="invisible"> 사용가능</span>
        <span className="icon-ticket_1 RSGBookMetadata_FlatrateIcon"/>
    </p>
  );
}

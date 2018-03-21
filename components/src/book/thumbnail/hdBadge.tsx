import * as React from 'react';

export interface HDBadgeProps {
  isComicHD: boolean;
}

export type ComponentProps = {
  className?: string;
};

export default function(props: HDBadgeProps): React.SFC<ComponentProps> {
  return ({ className }) => (
    props.isComicHD ? (
      <div className="RSGBookThumbnail_HDBadge">
        <p className="HDBadge_Label">고화질</p>
      </div>
    ) : null
  );
}

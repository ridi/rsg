import * as React from 'react';

export interface HDBadge {
  isComicHD: boolean;
}

export type ComponentProps = {
  className?: string;
};

export default function({ isComicHD }: HDBadge): React.SFC<ComponentProps> {
  return ({ className }) => (
    isComicHD ? (
      <div className="RSGBookThumbnail_HDBadge">
        <p className="HDBadge_Label">고화질</p>
      </div>
    ) : null
  );
}

import * as React from 'react';

export interface HDBadgeProps {
  isComicHD: boolean;
}

export const HDBadge: React.SFC<HDBadgeProps> = (props) => {
  if (props.isComicHD) {
    return (
      <div className="RSGBookThumbnail_HDBadge">
        <p className="HDBadge_Label">고화질</p>
      </div>
    );
  }
  return null;
};

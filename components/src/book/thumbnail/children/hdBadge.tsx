import * as React from 'react';

export interface HDBadgeProps {
  isComicHD: boolean
}

export const HDBadge: React.SFC<HDBadgeProps> = (props) => (props.isComicHD &&
  <div className="RSGBookThumbnail_HDBadge">
    <p className="HDBadge_Label">고화질</p>
  </div>
)

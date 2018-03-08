import * as React from 'react';

export interface StarRateProps {
  rate: number;
  participantCount: number;
}

const StarRate: React.SFC<StarRateProps> = (props) => (
  <p className="RSGBookMetadata_StarRate">
    <span className="StarRate_HiddenElement">{props.rate}점</span>
    <span className="StarRate_ParticipantCount">{props.participantCount}명</span>
    <span className="StarRate_HiddenElement">참여</span>
  </p>
);

export { StarRate };

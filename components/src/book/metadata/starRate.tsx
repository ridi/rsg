/* tslint:disable:max-line-length */

import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface StarRate {
  rate: number;
  participantCount: number;
}

const MAX_RATE = 5;
const StarRateIcons = Array.from({ length: MAX_RATE }).map((value: any, index: number) => (
  <svg viewBox="0 0 60 60" className={`StarRate_Icon StarRate_Icon${index}`} xmlns="http://www.w3.org/2000/svg" fill="#ffffff" key={index}>
    <path d="M0,0v60h60V0H0z M46.9,56L30,48.092L13.1,56l2.275-18.525L2.7,23.825l18.308-3.467L30,4l8.992,16.358L57.3,23.934L44.625,37.475L46.9,56z"/>
  </svg>
));

export default (data: StarRate = {} as StarRate): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;

  const starRatePercentage = data.rate * (100 / MAX_RATE);
  const inlineStyleWidth = {
    width: `${starRatePercentage}%`,
  };

  const Placeholder = setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder />; }

  return (
    <p className={classNames('RSGBookMetadata_StarRate', className)}>
      <span className="StarRate_IconBox">
        {StarRateIcons}
        <span className="StarRate_Bar" style={inlineStyleWidth}>{data.rate}점</span>
      </span>
      {data.participantCount > 0 && <>
        <span className="StarRate_ParticipantCount">
          {data.participantCount}
          <span className="StarRate_ParticipantCount_Unit">명</span>
        </span>
        <span className="StarRate_HiddenElement">참여</span>
      </>}
    </p>
  );
};

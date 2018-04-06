/* tslint:disable:max-line-length */

import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

export interface StarRate {
  rate: number;
  participantCount: number;
}

export default (data: StarRate = {} as StarRate): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;
  const MAX_RATE = 5;
  const inlineStyleScaleX = {
    transform: `scaleX(${data.rate / MAX_RATE})`,
  };

  const ParticipantCount: React.SFC<{}> = ({}) => {
    const MAX_PARTICIPANT_COUNT = 999;
    const participantCount = data.participantCount;

    if (participantCount > MAX_PARTICIPANT_COUNT) {
      return <>{MAX_PARTICIPANT_COUNT}+</>;
    } else if (participantCount > 0) {
      return <>{participantCount}<span className="StarRate_ParticipantCount_Unit">명</span></>;
    }
    return <span className="StarRate_HiddenElement">0명</span>;
  };

  const Placeholder = setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder />; }

  return (
    <p className={classNames('RSGBookMetadata_StarRate', className)}>
      <span className="StarRate_IconBox">
      <svg viewBox="0 0 52 12" className="StarRate_Mask" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
        <path d="M0,0v12h52V0H0z M8.935,10.518L6,9.143l-2.936,1.375l0.402-3.217L1.25,4.933l3.184-0.612L6,1.483
      l1.565,2.838l3.185,0.612L8.532,7.301L8.935,10.518z M18.935,10.518L16,9.143l-2.936,1.375l0.402-3.217L11.25,4.933l3.184-0.612
      L16,1.483l1.565,2.838l3.185,0.612l-2.217,2.368L18.935,10.518z M28.936,10.518L26,9.143l-2.936,1.375l0.402-3.217L21.25,4.933
      l3.184-0.612L26,1.483l1.565,2.838l3.186,0.612l-2.217,2.368L28.936,10.518z M38.936,10.518L36,9.143l-2.936,1.375l0.402-3.217
      L31.25,4.933l3.184-0.612L36,1.483l1.564,2.838l3.186,0.612l-2.217,2.368L38.936,10.518z M48.936,10.518L46,9.143l-2.936,1.375
      l0.402-3.217L41.25,4.933l3.184-0.612L46,1.483l1.564,2.838l3.186,0.612l-2.217,2.368L48.936,10.518z"/>
      </svg>
        <span className="StarRate_Bar" style={inlineStyleScaleX}>{data.rate}점</span>
      </span>
      <span className="StarRate_ParticipantCount">
        <ParticipantCount />
      </span>
      <span className="StarRate_HiddenElement">참여</span>
    </p>
  );
};

/* tslint:disable:max-line-length */

import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

export interface StarRate {
  rate: number;
  participantCount: number;
}

const MAX_PARTICIPANT_COUNT = 999;
const MAX_RATE = 5;

export default (data: Data & StarRate): React.SFC<ComponentProps & {
  hideUnit?: boolean,
}> => (props) => {
  const { setPlaceholder, participantCount } = data;
  const { className, hideUnit = false } = props;

  const inlineStyleScaleX = {
    transform: `scaleX(${data.rate / MAX_RATE})`,
  };

  const Placeholder = setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <div className={classNames(data.className, className)}>
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
        {
          participantCount > MAX_PARTICIPANT_COUNT
            ? `${MAX_PARTICIPANT_COUNT}+`
            : !participantCount
              ? <span className="invisible">0명</span>
              : (
                  <span>
                    {participantCount}
                    <span className={classNames({ invisible: hideUnit })}>명</span>
                  </span>
                )
        }
      </span>
      <span className="invisible">참여</span>
    </div>
  );
};

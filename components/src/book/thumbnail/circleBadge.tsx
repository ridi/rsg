import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps,
} from '../index';

import { ThumbnailSize } from './wrapper';

export enum CircleBadgeType {
  Rental = 'rental',
  Freebook = 'freebook',
  Discount = 'discount',
}

export interface RentalBadgeProps {
  type: CircleBadgeType.Rental;
}

export interface FreebookBadgeProps {
  type: CircleBadgeType.Freebook;
  count: number;
  unit: string;
  emphasis: boolean;
}

export interface DiscountBadgeProps {
  type: CircleBadgeType.Discount;
  rate: number;
}

export type CircleBadge = RentalBadgeProps
  | FreebookBadgeProps
  | DiscountBadgeProps;

const RentalBadge: React.SFC<{}> = () => (
  <p className="CircleBadge_Label">
    대여
    <span className="CircleBadge_HiddenElement">가능 도서</span>
  </p>
);

const FreebookBadge: React.SFC<FreebookBadgeProps> = ({ count, unit }) => (
  <p className="CircleBadge_Label">
    <span className="CircleBadge_FreeCount">{count}</span>
    {unit}<br/>
    무료
  </p>
);

const DiscountBadge: React.SFC<DiscountBadgeProps> = ({ rate }) => (
  <p className="CircleBadge_Label">
    <span className="CircleBadge_DiscountRate">{rate}</span>%
    <span className="CircleBadge_HiddenElement">할인</span>
  </p>
);

type ComponentProps = Pick<ChildrenProps, 'className' | 'dataset'>;

export default (data: Data & CircleBadge): React.SFC<ComponentProps & {
  thumbnailSize?: ThumbnailSize,
}> => (props) => {
  const { className } = props;

  const Placeholder = data.setPlaceholder(false, !data.type);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  const computedClassName = classNames(
    data.className,
    `${data.className}-type-${data.type}`,
    { [`${data.className}-effect-glow`]: data.type === CircleBadgeType.Freebook && data.emphasis },
    className,
  );

  return (
    <div className={classNames(computedClassName)}>
      {data.type === CircleBadgeType.Rental && <RentalBadge />}
      {data.type === CircleBadgeType.Freebook && <FreebookBadge {...data}/>}
      {data.type === CircleBadgeType.Discount && <DiscountBadge {...data}/>}
    </div>
  );
};

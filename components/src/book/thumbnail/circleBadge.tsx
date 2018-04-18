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
    {
      [`${data.className}-effect-glow`]: data.type === CircleBadgeType.Freebook && data.emphasis,
      [`${data.className}-small`]: props.thumbnailSize < 80,
    },
    className,
  );

  return (
    <div className={classNames(computedClassName)}>
      <div className={`${data.className}_TextWrapper`}>
        {data.type === CircleBadgeType.Rental && (
          <>
            <span className={`${data.className}_Label ${data.className}_Label-rental`}>대여</span>
            <span className="invisible">가능 도서</span>
          </>
        )}
        {data.type === CircleBadgeType.Freebook && (
          <>
            <span className={`${data.className}_Label ${data.className}_Label-freebookCount museoSans`}>{data.count}</span>
            {data.unit}<br/>
            무료
          </>
        )}
        {data.type === CircleBadgeType.Discount && (
          <>
            <span className={`${data.className}_Label ${data.className}_Label-discountRate museoSans`}>{data.rate}</span>%
            <span className="invisible">할인</span>
          </>
        )}
      </div>
    </div>
  );
};

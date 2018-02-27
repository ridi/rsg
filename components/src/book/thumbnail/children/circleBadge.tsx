import * as React from 'react';
import classNames from 'classnames'

export enum CircleBadgeType {
  Rental = 'rental',
  Freebook = 'freebook',
  Discount = 'discount',
}

export interface RentalBadge {
  type: CircleBadgeType.Rental
}

export interface FreebookBadge {
  type: CircleBadgeType.Freebook
  count: number
  unit: string
}

export interface DiscountBadge {
  type: CircleBadgeType.Discount
  rate: number
}

export type CircleBadgeProps = RentalBadge
  | FreebookBadge
  | DiscountBadge


const CircleBadge: React.SFC<CircleBadgeProps> = (props) => {
  const MINIMUM_FREE_BOOK_COUNT_FOR_GLOW_EFFECT: number = 40;
  
  const circleBadgeClassList: Array<string> = [
    'RSGBookThumbnail_CircleBadge',
    `RSGBookThumbnail_CircleBadge-type-${ props.type }`,
  ];

  if (props.type === CircleBadgeType.Freebook && 
    props.count >= MINIMUM_FREE_BOOK_COUNT_FOR_GLOW_EFFECT) {
      circleBadgeClassList.push('RSGBookThumbnail_CircleBadge-effect-glow');
  }

  return <div className={ classNames(circleBadgeClassList) }>
    { props.type === CircleBadgeType.Rental && 
      <p className="CircleBadge_Label">
        대여
        <span className="CircleBadge_HiddenElement">가능 도서</span>
      </p>
    }
    { props.type === CircleBadgeType.Freebook && 
      <p className="CircleBadge_Label">
        <span className="CircleBadge_FreeCount">{ props.count }</span>
        { props.unit }<br/>
        무료
      </p>
    }
    { props.type === CircleBadgeType.Discount && 
      <p className="CircleBadge_Label">
        <span className="CircleBadge_DiscountRate">{ props.rate }</span>%
        <span className="CircleBadge_HiddenElement">할인</span>
      </p>
    }
  </div>
}

export { CircleBadge }

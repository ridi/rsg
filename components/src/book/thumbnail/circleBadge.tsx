import * as React from 'react';

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
  return <span></span>
}

export { CircleBadge }

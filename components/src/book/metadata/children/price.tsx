import * as React from 'react';

export enum PriceEnum {
  Buy = 'buy',
  Rent = 'rent',
  Cashback = 'cashback',
  Flatrate = 'flatrate',
  Pointback = 'pointback',
  Paper = 'paper',
}

export enum SeriesPriceEnum {
  Buy = 'buy',
  Rent = 'rent',
}

export interface BuyPriceInfo {
  price: number
  regularPrice: number
  discountPercentage: number
}

export interface RentPriceInfo extends BuyPriceInfo {
  rentalDays: number
}

export type PriceInfo = {
  [PriceEnum.Buy]: BuyPriceInfo
  [PriceEnum.Rent]: RentPriceInfo
  [PriceEnum.Cashback]: {
    amount: number
  }
  [PriceEnum.Flatrate]: {
    id: number
  }
  [PriceEnum.Pointback]: {
    pointbackAmount: number
    pointDuration: number
  }
  [PriceEnum.Paper]: {
    price: number
  }
}

export type SeriesPriceInfo = {
  [PriceEnum.Buy]: BuyPriceInfo
  [PriceEnum.Rent]: RentPriceInfo
}

export interface PriceProps {
  book?: {
    [T in PriceEnum]?: PriceInfo[T]
  }
  series?: {
    [T in SeriesPriceEnum]?: SeriesPriceInfo[T]
  }
}

const Price: React.SFC<PriceProps> = (props) => (
  <span className='rsgBook__metadata__price'></span>
)

export { Price }

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
  [PriceEnum.Buy]?: BuyPriceInfo
  [PriceEnum.Rent]?: RentPriceInfo
  [PriceEnum.Cashback]?: {
    amount: number
  }
  [PriceEnum.Flatrate]?: {
    id: number
  }
  [PriceEnum.Pointback]?: {
    pointbackAmount: number
    pointDuration: number
  }
  [PriceEnum.Paper]?: {
    price: number
  }
}

export type SeriesPriceInfo = {
  [PriceEnum.Buy]?: BuyPriceInfo
  [PriceEnum.Rent]?: RentPriceInfo
}

export interface PriceProps {
  book?: PriceInfo
  series?: SeriesPriceInfo
}

const Cell: React.SFC<{ label: string } & (BuyPriceInfo | RentPriceInfo)> = (props) => (
  <span>
    <span>{props.label}</span>
    <span>{props.price}원</span>
    <span>({props.discountPercentage}%)</span>
    {props.discountPercentage > 0 && <span>{props.regularPrice}원</span>}
  </span>
)

const Row: React.SFC<PriceInfo | SeriesPriceInfo> = (props) => (
  <div>
    {props[PriceEnum.Buy] && <Cell label='구매' {...props[PriceEnum.Buy]}/>}
    {props[PriceEnum.Rent] && <Cell label='구매' {...props[PriceEnum.Rent]}/>}
  </div>
)

const Price: React.SFC<PriceProps> = (props) => (
  <div className='RSGBookMetadata_Price'>
    {props.book && <Row {...props.book}/>}
    {props.series && <Row {...props.series}/>}
  </div>
)

export { Price }

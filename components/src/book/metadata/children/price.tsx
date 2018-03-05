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
  <li className="RSGBookMetadata_PriceList">
    <span className="PriceList_Label">{props.label}</span>
    <span className="PriceList_Detail">
      {props.price}원
      {props.discountPercentage > 0 && 
        <>
          <span className="PriceList_DiscountPercentage"> ({props.discountPercentage}%) </span>
          <del className="PriceList_RegularPrice">{props.regularPrice}원</del>
        </>}
    </span>
  </li>
)

const Row: React.SFC<{ priceType?: string } & (PriceInfo | SeriesPriceInfo)> = (props) => {
  const priceLabelPrefix = props.priceType ? props.priceType : '';
  return (
    <ul>
      {props[PriceEnum.Buy] && <Cell label={`${priceLabelPrefix}구매 `} {...props[PriceEnum.Buy]}/>}
      {props[PriceEnum.Rent] && <Cell label={`${priceLabelPrefix}대여 `} {...props[PriceEnum.Rent]}/>}
    </ul>
  )
}

const Price: React.SFC<PriceProps> = (props) => (
  <div className="RSGBookMetadata_Price">
    {props.book && <Row {...props.book}/>}
    {props.series && <Row priceType='전권' {...props.series}/>}
  </div>
)

export { Price }

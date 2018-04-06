import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

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
  price: number;
  regularPrice: number;
  discountPercentage: number;
}

export interface RentPriceInfo extends BuyPriceInfo {
  rentalDays: number;
}

export interface PriceInfo {
  [PriceEnum.Buy]?: BuyPriceInfo;
  [PriceEnum.Rent]?: RentPriceInfo;
  [PriceEnum.Cashback]?: {
    amount: number,
  };
  [PriceEnum.Flatrate]?: {
    id: number,
  };
  [PriceEnum.Pointback]?: {
    pointbackAmount: number
    pointDuration: number,
  };
  [PriceEnum.Paper]?: {
    price: number,
  };
}

export interface SeriesPriceInfo {
  [PriceEnum.Buy]?: BuyPriceInfo;
  [PriceEnum.Rent]?: RentPriceInfo;
}

export interface Price {
  book?: PriceInfo;
  series?: SeriesPriceInfo;
}

const Row: React.SFC<{ label: string } & (BuyPriceInfo | RentPriceInfo)> = (props) => (
  <li className="RSGBookMetadata_PriceRow">
    <span className="PriceRow_Label">{props.label}</span>
    <span className="PriceRow_LastPrice">{props.price}원</span>
    {props.discountPercentage > 0 && <>
      <span className="PriceRow_DiscountPercentage">{props.discountPercentage}%</span>
      <del className="PriceRow_RegularPrice">{props.regularPrice}원</del>
    </>}
  </li>
);

const Column: React.SFC<{ isSeries?: boolean } & (PriceInfo | SeriesPriceInfo)> = (props) => {
  const priceLabelPrefix = props.isSeries ? '전권' : '';
  const priceType = props.isSeries ? 'series' : 'book';
  const priceColumnClassName = `RSGBookMetadata_PriceColumn RSGBookMetadata_PriceColumn-type-${priceType}`;

  return (
    <ul className={priceColumnClassName}>
      {props[PriceEnum.Buy] && <Row label={`${priceLabelPrefix}구매`} {...props[PriceEnum.Buy]}/>}
      {props[PriceEnum.Rent] && <Row label={`${priceLabelPrefix}대여`} {...props[PriceEnum.Rent]}/>}
    </ul>
  );
};

export default (data: Price): React.SFC<ComponentProps & {
  hideSeries?: boolean;
}> => (props) => {
  const { className, setPlaceholder, hideSeries } = props;

  const Placeholder = setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder />; }

  return (
    <div className={classNames('RSGBookMetadata_Price', className)}>
      {data.book && <Column {...data.book}/>}
      {data.series && !hideSeries && <Column isSeries={true} {...data.series}/>}
    </div>
  );
};

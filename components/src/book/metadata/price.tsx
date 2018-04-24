import classNames from 'classnames';
import { pick } from 'lodash-es';
import * as React from 'react';

import { currency } from '../utils/currency';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

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

const Cell: React.SFC<{
  label: string,
  prefixClassName: string,
  hideRegularPrice?: boolean,
} & (BuyPriceInfo | RentPriceInfo)> = (props) => {
  const { prefixClassName: className } = props;
  return props.price ? (
    <li className={`${className}_Cell`}>
      <span className={`${className}_Label`}>{props.label}</span>
      <span className={`${className}_CurrentPrice museoSans`}>{`${currency(props.price)}원`}</span>
      {props.discountPercentage > 0 && <>
        <span className={`${className}_DiscountPercentage museoSans`}>{`${props.discountPercentage}%`}</span>
        {!props.hideRegularPrice && (
          <del className={`${className}_RegularPrice museoSans`}>{`${currency(props.regularPrice)}원`}</del>
        )}
      </>}
    </li>
  ) : null;
};
export default (data: Data & Price): React.SFC<ComponentProps & {
  hideSeries?: boolean;
}> => (props) => {
  const { className, hideSeries } = props;

  const Placeholder = data.setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <div className={classNames(data.className, className)}>
      <ul className={`${data.className}_Row`}>
        <Cell
          label="대여"
          prefixClassName={data.className}
          hideRegularPrice={hideSeries}
          {...data.book.buy}
        />
        {data.series && !hideSeries && <Cell
          label="전권 대여"
          prefixClassName={data.className}
          {...data.series.buy}
        />}
      </ul>
      <ul className={`${data.className}_Row`}>
        <Cell
          label="구매"
          prefixClassName={data.className}
          hideRegularPrice={hideSeries}
          {...data.book.buy}
        />
        {data.series && !hideSeries && <Cell
          label="전권 구매"
          prefixClassName={data.className}
          {...data.series.buy}
        />}
      </ul>
    </div>
  );
};

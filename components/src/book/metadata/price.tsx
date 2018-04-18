import classNames from 'classnames';
import { pick } from 'lodash-es';
import * as React from 'react';

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

const Row: React.SFC<{
  label: string,
  prefixClassName: string,
  hideRegularPrice?: boolean,
} & (BuyPriceInfo | RentPriceInfo)> = (props) => {
  const { prefixClassName: className } = props;
  return (
    <li className={`${className}_Row`}>
      <span className={`${className}_Label`}>{props.label}</span>
      <span className={`${className}_CurrentPrice`}>{props.price}원</span>
      {props.discountPercentage > 0 && <>
        <span className={`${className}_DiscountPercentage`}>{props.discountPercentage}%</span>
        {!props.hideRegularPrice && (
          <del className={`${className}_RegularPrice`}>{props.regularPrice}원</del>
        )}
      </>}
    </li>
  );
};

const Column: React.SFC<{
  isSeries?: boolean,
  prefixClassName: string,
  hideRegularPrice?: boolean,
} & (PriceInfo | SeriesPriceInfo)> = (props) => {
  const priceLabelPrefix = props.isSeries ? '전권' : '';
  const nestedProps = pick(props, ['prefixClassName', 'hideRegularPrice']);
  return (
    <ul className={`${props.prefixClassName}_Column`}>
      {props[PriceEnum.Buy] && (
        <Row
          label={`${priceLabelPrefix}구매`}
          {...props[PriceEnum.Buy]}
          {...nestedProps}
        />
      )}
      {props[PriceEnum.Rent] && (
        <Row
          label={`${priceLabelPrefix}대여`}
          {...props[PriceEnum.Rent]}
          {...nestedProps}
        />
      )}
    </ul>
  );
};

export default (data: Data & Price): React.SFC<ComponentProps & {
  hideSeries?: boolean;
}> => (props) => {
  const { className, hideSeries } = props;

  const Placeholder = data.setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <div className={classNames(data.className, className)}>
      {data.book && (
        <Column
          prefixClassName={data.className}
          hideRegularPrice={hideSeries}
          {...data.book}
        />
      )}
      {data.series && !hideSeries && (
        <Column
          isSeries={true}
          prefixClassName={data.className}
          {...data.series}
        />
      )}
    </div>
  );
};

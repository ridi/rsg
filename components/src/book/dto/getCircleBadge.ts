import {
  CircleBadge,
  CircleBadgeType,
  DiscountBadgeProps,
  FreebookBadgeProps,
  RentalBadgeProps,
} from '../thumbnail/circleBadge';

import { SeriesPriceInfo } from '../metadata/price';
import { BookDto } from './index';

function getRentalBadgeProps(dto: BookDto): RentalBadgeProps {
  try {
    const { genre } = dto.categories[0];
    const { isRental } = dto.property;

    const isBlSeparateVolume = genre === 'bl' && !dto.series.property.isSerial;
    const isRentalBadgePropsEnableGenre = ['general', 'romance'].includes(genre) || isBlSeparateVolume;

    return isRental && isRentalBadgePropsEnableGenre && {
      type: CircleBadgeType.Rental,
    };
  } catch {
    return null;
  }
}

function getDiscountBadgeProps(dto: BookDto): DiscountBadgeProps {
  const isSeries = Boolean(dto.series && dto.series.property);

  const discountRate = (() => {
    let maxDiscountRate = 0;
    try {
      const { priceInfo, series: { priceInfo: seriesPriceInfo = {} as SeriesPriceInfo } = {} } = dto;
      const { discountPercentage: buyDiscount = 0 } = priceInfo.buy || {};
      const { discountPercentage: rentDiscount = 0 } = priceInfo.rent || {};
      maxDiscountRate = Math.max(buyDiscount, rentDiscount);

      if (isSeries) {
        const { discountPercentage: seriesBuyDiscount = 0 } = seriesPriceInfo.buy || {};
        const { discountPercentage: seriesRentDiscount = 0 } = seriesPriceInfo.rent || {};
        maxDiscountRate = Math.max(maxDiscountRate, seriesBuyDiscount, seriesRentDiscount);
      }
      return maxDiscountRate;
    } catch {
      return maxDiscountRate;
    }
  })();

  const inDiscountBadgePropsRange = (discountRate < 100) && (discountRate >= 10);
  const ignoreDiscountBadgeProps = isSeries && dto.series.property.freeBookCount >= 4;

  return inDiscountBadgePropsRange && !ignoreDiscountBadgeProps && {
    type: CircleBadgeType.Discount,
    rate: discountRate,
  };
}

function getFreebookBadgeProps(dto: BookDto): FreebookBadgeProps {
  try {
    const { freeBookCount = 0, unit } = dto.series && dto.series.property;

    return freeBookCount && {
      type: CircleBadgeType.Freebook,
      count: freeBookCount,
      unit,
      emphasis: freeBookCount >= 40,
    };
  } catch {
    return null;
  }
}

export function getCircleBadge(dto: BookDto): CircleBadge {
  const rentalBadgeProps = getRentalBadgeProps(dto);
  const discountBadgeProps = getDiscountBadgeProps(dto);
  const freebookBadgeProps = getFreebookBadgeProps(dto);

  return rentalBadgeProps || discountBadgeProps || freebookBadgeProps;
}

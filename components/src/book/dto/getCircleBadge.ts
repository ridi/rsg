import {
  CircleBadgeProps,
  CircleBadgeType,
  DiscountBadge,
  FreebookBadge,
  RentalBadge,
} from '../thumbnail/circleBadge';

import { SeriesPriceInfo } from '../metadata/price';
import { BookDto } from './dto';

function getRentalBadge(dto: Partial<BookDto>): RentalBadge {
  try {
    const { genre } = dto.categories[0];
    const { isRental } = dto.property;

    const isBlSeparateVolume = genre === 'bl' && !dto.series.property.isSerial;
    const isRentalBadgeEnableGenre = ['general', 'romance'].includes(genre) || isBlSeparateVolume;

    return isRental && isRentalBadgeEnableGenre && {
      type: CircleBadgeType.Rental,
    };
  } catch {
    return null;
  }
}

function getDiscountBadge(dto: Partial<BookDto>): DiscountBadge {
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

  const inDiscountBadgeRange = (discountRate < 100) && (discountRate >= 10);
  const ignoreDiscountBadge = isSeries && dto.series.property.freeBookCount >= 4;

  return inDiscountBadgeRange && !ignoreDiscountBadge && {
    type: CircleBadgeType.Discount,
    rate: discountRate,
  };
}

function getFreebookBadge(dto: Partial<BookDto>): FreebookBadge {
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

export function getCircleBadge(dto: Partial<BookDto>): CircleBadgeProps {
  const rentalBadge = getRentalBadge(dto);
  const discountBadge = getDiscountBadge(dto);
  const freebookBadge = getFreebookBadge(dto);

  return rentalBadge || discountBadge || freebookBadge || null;
}

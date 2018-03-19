import { CircleBadgeProps, CircleBadgeType } from '../thumbnail/circleBadge';
import { BookDto } from './dto';

export function getCircleBadge(dto: BookDto): CircleBadgeProps {
  try {
    const isSeries = !!(dto.series && dto.series.property);

    // 대여
    const { genre } = dto.categories[0];
    const { isRental } = dto.property;
    const isRentalBadgeEnableGenre = ['general', 'romance'].includes(genre);

    // 무료책
    const MAX_FREE_BOOK_COUNT_FOR_DISCOUNT_RENDERING = 4;
    const freeBookCount = isSeries ? dto.series.property.freeBookCount : 0;
    const freeBookUnit = isSeries ? dto.series.property.unit : '';
    const hasFreeBook = freeBookCount > 0;

    // 할인율
    const MIN_DISCOUNT_RATE = 10;
    const discountRate = (() => {
      const { buy, rent } = dto.priceInfo;
      // 100% 할인인 경우 무료도서 이기 때문에 할인율에서 제외
      const buyDiscount = buy.discountPercentage === 100 ? 0 : buy.discountPercentage;
      const rentDiscount = rent.discountPercentage === 100 ? 0 : rent.discountPercentage;

      let maxDiscountRate = Math.max(buyDiscount, rentDiscount);

      if (isSeries) {
        const { buy: seriesBuy, rent: seriesRent } = dto.series.priceInfo;
        const seriesBuyDiscount = seriesBuy.discountPercentage === 100 ? 0 : seriesBuy.discountPercentage;
        const seriesRentDiscount = seriesRent.discountPercentage === 100 ? 0 : seriesRent.discountPercentage;
        maxDiscountRate = Math.max(maxDiscountRate, seriesBuyDiscount, seriesRentDiscount);
      }
      return maxDiscountRate;
    })();
    const hasDiscount = discountRate > MIN_DISCOUNT_RATE;

    if (isRentalBadgeEnableGenre && isRental) {
      return {
        type: CircleBadgeType.Rental,
      };
    } else if (hasDiscount && freeBookCount < MAX_FREE_BOOK_COUNT_FOR_DISCOUNT_RENDERING) {
      return {
        type: CircleBadgeType.Discount,
        rate: discountRate,
      };
    } else if (hasFreeBook) {
      return {
        type: CircleBadgeType.Freebook,
        count: freeBookCount,
        unit: freeBookUnit,
      };
    }

    return null;
  } catch (e) {
    return null;
  }
}

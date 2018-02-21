import { BookDto } from './types'
import { CircleBadgeProps, CircleBadgeType } from '../thumbnail/circleBadge'

export function getCircleBadge (dto: BookDto): CircleBadgeProps {
  const { genre } = dto.categories[0]
  const { isRental } = dto.property

  const isGeneral = ['general', 'romance'].includes(genre)
  const isSeries = !!(dto.series && dto.series.property)
  const isSetbook = !!dto.setbook

  if (isGeneral && isRental) {
    return { type: CircleBadgeType.Rental }
  } else if (genre === 'general' || (isSeries && isGeneral) || isSetbook) {
    const { buy, rent } = dto.priceInfo

    let discountRate = 0
    let rentalDiscountRate = 0

    if (buy) {
      discountRate = buy.discountPercentage;
    }
    if (rent && !isSetbook) {
      rentalDiscountRate = rent.discountPercentage;
    }

    const maxDiscountRate = Math.max(discountRate, rentalDiscountRate)

    return maxDiscountRate < 10 ? null : {
      type: CircleBadgeType.Discount,
      rate: maxDiscountRate,
    }
  } else if (isSeries) {
    const { freeBookCount, unit } = dto.series.property

    const { buy, rent } = dto.priceInfo
    const { buy: seriesBuy, rent: seriesRent } = dto.series.priceInfo

    const discountRate = Math.max(
      buy.discountPercentage,
      rent.discountPercentage,
      seriesBuy.discountPercentage,
      seriesRent.discountPercentage,
    )

    if (discountRate < 10 && freeBookCount === 0) {
      return null
    } else if (discountRate >= 10 && freeBookCount < 4) {
      return {
        type: CircleBadgeType.Discount,
        rate: discountRate,
      }
    }
    return {
      type: CircleBadgeType.Freebook,
      count: freeBookCount,
      unit,
    }
  }

  return null
}

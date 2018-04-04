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
      discountRate = buy.price / buy.regularPrice
    }
    if (rent && !isSetbook) {
      rentalDiscountRate = rent.price / rent.regularPrice
    }

    const rate = Math.max(discountRate, rentalDiscountRate)
    return rate < 10 ? null : {
      type: CircleBadgeType.Discount,
      rate,
    }
  } else if (isSeries) {
    const { freeBookCount, unit } = dto.series.property

    const { buy, rent } = dto.priceInfo
    const { buy: seriesBuy, rent: seriesRent } = dto.series.priceInfo

    const discountRate = Math.max(
      buy.price / buy.regularPrice,
      rent.price / rent.regularPrice,
      seriesBuy.price / seriesBuy.regularPrice,
      seriesRent.price / seriesRent.regularPrice,
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

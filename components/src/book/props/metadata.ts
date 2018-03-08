import { AuthorsProps } from './children/authors'
import { BookTypeBadgeProps, SomedealBadgeProps } from './children/badges'
import { PriceProps } from './children/price'
import { SeriesCountProps } from './children/seriesCount'
import { StarRateProps } from './children/starRate';

export interface CategoryProps {
  id: number
  name: string
  genre: string
  subGenre: string
  isSeriesCategory: boolean
}

export interface SeriesPropertyProps extends SeriesCountProps {
  lastVolumeId: string
  title: string
  freeBookCount: number
  isSerial: boolean
}

export interface SiriesProps {
  id: string
  volume: number
  property: SeriesPropertyProps
}

export interface PropertyProps extends BookTypeBadgeProps, SomedealBadgeProps {
  isWebtoon: boolean
  isManga: boolean
  isMagazine: boolean
  isAdultOnly: boolean
  isNewBook: boolean
  isOpen: boolean
  isTrial: boolean
  reviewDisplayId: string | null
  kpcId: string | null
}

export default interface BaseProps {
  id: string
  link?: string
  title: {
    main: string
    sub: string | null
    prefix: string | null
  }
  description?: string
  categories: CategoryProps[]
  series?: SiriesProps
  priceInfo: PriceProps
  authors: AuthorsProps
  property: PropertyProps
  publishedDate?: {
    [type: string]: string
  }
  publisher?: {
    id: number
    name: string
  }
  starRate?: StarRateProps
}

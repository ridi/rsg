import { AuthorsProps } from '../metadata/authors';
import { BookTypeBadgeProps, SomedealBadgeProps } from '../metadata/badges';
import { PriceProps } from '../metadata/price';
import { SeriesCountProps } from '../metadata/seriesCount';
import { StarRateProps } from '../metadata/starRate';

export { SeriesPriceInfo } from '../metadata/price';

export interface CategoryProps {
  id: number;
  name: string;
  genre: string;
  subGenre: string;
  isSeriesCategory: boolean;
}

export interface SeriesPropertyProps extends SeriesCountProps {
  lastVolumeId: string;
  title: string;
  freeBookCount: number;
  isSerial: boolean;
}

export interface SeriesProps {
  id: string;
  volume: number;
  property: SeriesPropertyProps;
}

export interface PropertyProps extends BookTypeBadgeProps, SomedealBadgeProps {
  isWebtoon: boolean;
  isManga: boolean;
  isMagazine: boolean;
  isAdultOnly: boolean;
  isNewBook: boolean;
  isOpen: boolean;
  isTrial: boolean;
  reviewDisplayId: string | null;
  kpcId: string | null;
}

export interface MetadataProps {
  id: string;
  link: string;
  title: string;
  subTitle: string;
  description: string;
  categories: CategoryProps[];
  series: SeriesProps;
  priceInfo: PriceProps;
  authors: AuthorsProps;
  property: PropertyProps;
  publishedDate: {
    [type: string]: string,
  };
  publisher: {
    id: number
    name: string,
  };
  starRate: StarRateProps;
}

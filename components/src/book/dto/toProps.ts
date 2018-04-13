import { getCircleBadge } from './getCircleBadge';
import { BookDto } from './index';

import { AdultOnlyBadge } from '../thumbnail/adultOnlyBadge';
import { CircleBadge } from '../thumbnail/circleBadge';
import { CoverImage } from '../thumbnail/coverImage';
import { HDBadge } from '../thumbnail/hdBadge';
import { SetBooklet } from '../thumbnail/setBooklet';
import { ThumbnailWrapper } from '../thumbnail/wrapper';

import { Authors } from '../metadata/authors';
import { BookTypeBadge } from '../metadata/bookTypeBadge';
import { Description } from '../metadata/description';
import { Price } from '../metadata/price';
import { Publisher } from '../metadata/publisher';
import { SeriesCount } from '../metadata/seriesCount';
import { SomedealBadge } from '../metadata/somedealBadge';
import { SubTitle } from '../metadata/subTitle';
import { Title } from '../metadata/title';

export interface ThumbnailProps {
  wrapper: ThumbnailWrapper;
  adultOnlyBadge: AdultOnlyBadge;
  circleBadge: CircleBadge;
  coverImage: CoverImage;
  hdBadge: HDBadge;
  setBooklet: SetBooklet;
}

export interface MetadataProps {
  authors: Authors;
  bookTypeBadge: BookTypeBadge;
  description: Description;
  price: Price;
  publisher: Publisher;
  seriesCount: SeriesCount;
  somedealBadge: SomedealBadge;
  subTitle: SubTitle;
  title: Title;
}

function trim(strings: TemplateStringsArray, ...values: string[]) {
  return strings.reduce((prev, cur, i) => prev + cur + (values[i] || ''), '').trim();
}

export default function(dto: BookDto) {
  const thumbnailProps: ThumbnailProps = {
    wrapper: {
      link: `/v2/Detail?id=${dto.id}`,
    },
    coverImage: {
      title: dto.title && dto.title.main,
      thumbnail: dto.thumbnail,
    },
    adultOnlyBadge: {
      isAdultOnly: dto.property && dto.property.isAdultOnly,
    },
    circleBadge: getCircleBadge(dto),
    hdBadge: {
      isComicHD: dto.file && dto.file.isComicHd,
    },
    setBooklet: dto.setbook,
  };
  const metadataProps: MetadataProps = {
    authors: dto.authors,
    bookTypeBadge: {
      isComic: dto.property && dto.property.isComic,
      isNovel: dto.property && dto.property.isNovel,
    },
    description: {
      description: dto.description,
    },
    price: {
      book: dto.priceInfo,
      series: dto.series && dto.series.priceInfo,
    },
    publisher: dto.publisher && {
      name: dto.publisher.name,
      link: `/search?q=출판사:${dto.publisher.name}`,
    },
    seriesCount: dto.series && dto.series.property,
    somedealBadge: {
      isSomedeal: dto.property && dto.property.isSomedeal,
    },
    subTitle: {
      subTitle: dto.title && dto.title.sub,
    },
    title: {
      title: (() => {
        const { prefix, main: title } = dto.title || {} as BookDto['title'];
        const { title: seriesTitle } = dto.series && dto.series.property || {} as BookDto['series']['property'];
        return trim`${prefix} ${seriesTitle || title}`;
      })(),
      link: `/v2/Detail?id=${dto.id}`,
    },
  };
  return { thumbnailProps, metadataProps };
}

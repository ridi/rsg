import { Track } from './../index';
import { getCircleBadge } from './getCircleBadge';
import { BookDto } from './index';

import { CircleBadge } from '../thumbnail/circleBadge';
import { CoverImage } from '../thumbnail/coverImage';
import { HDBadge } from '../thumbnail/hdBadge';
import { SetBooklet } from '../thumbnail/setBooklet';

import { Authors } from '../metadata/authors';
import { BookTypeBadge } from '../metadata/bookTypeBadge';
import { Description } from '../metadata/description';
import { Price } from '../metadata/price';
import { Publisher } from '../metadata/publisher';
import { SeriesCount } from '../metadata/seriesCount';
import { SomedealBadge } from '../metadata/somedealBadge';
import { StarRate } from '../metadata/starRate';
import { SubTitle } from '../metadata/subTitle';
import { Title } from '../metadata/title';

export interface ThumbnailProps {
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
  starRate: StarRate;
  subTitle: SubTitle;
  title: Title;
}

function trim(strings: TemplateStringsArray, ...values: string[]) {
  return strings.reduce((prev, cur, i) => prev + cur + (values[i] || ''), '').trim();
}

export default function(dto: BookDto, track: Track) {
  const thumbnailProps: ThumbnailProps = {
    coverImage: {
      link: `/v2/Detail?id=${dto.id}`,
      title: dto.title && dto.title.main,
      thumbnail: dto.thumbnail,
      isAdultOnly: dto.property && dto.property.isAdultOnly,
      track,
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
    starRate: dto.starRate,
    subTitle: {
      subTitle: dto.title && dto.title.sub,
    },
    title: {
      title: dto.series && dto.series.property && dto.series.property.title
        ? dto.title && trim`${dto.title.prefix} ${dto.series.property.title}`
        : dto.title && trim`${dto.title.prefix} ${dto.title.main}`,
      link: `/v2/Detail?id=${dto.id}`,
    },
  };
  return { thumbnailProps, metadataProps };
}

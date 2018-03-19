import { camelize } from '@ridi/object-case-converter';

import { BookDto } from './dto';
import { MetadataProps, SeriesPriceInfo, SeriesProps } from './metadata';
import { ThumbnailProps } from './thumbnail';

import { getCircleBadge } from './getCircleBadge';

function getThumbnailProps(dto: BookDto, link: string): ThumbnailProps {
  return {
    id: dto.id,
    link,
    title: dto.title && dto.title.main,
    thumbnail: dto.thumbnail,
    isAdultOnly: dto.property && dto.property.isAdultOnly,
    isComicHD: dto.file && dto.file.isComicHd,
    circleBadge: getCircleBadge(dto),
    setBooklet: dto.setbook,
  };
}

function getMetadataProps(dto: BookDto, link: string): MetadataProps {
  const {
    property: seriesProperty,
    priceInfo: seriesPriceInfo,
    ...series,
  } = dto.series || {} as SeriesProps & { priceInfo: SeriesPriceInfo };

  return {
    id: dto.id,
    link,
    title: dto.title && `${dto.title.prefix} ${dto.title.main}`.trim(),
    subTitle: dto.title && dto.title.sub,
    description: dto.description,
    categories: dto.categories,
    series: { ...series, property: seriesProperty },
    priceInfo: {
      book: dto.priceInfo,
      series: seriesPriceInfo,
    },
    authors: dto.authors,
    property: dto.property,
    publishedDate: dto.publishedDate,
    publisher: dto.publisher,
    starRate: dto.starRate,
  };
}

export interface BookProps {
  thumbnail: ThumbnailProps;
  metadata: MetadataProps;
}

export const dto2props = (data: object): BookProps => {
  const dto: BookDto = camelize(data, { recursive: true });
  const link = `/v2/Detail?id=${dto.id}`;

  return {
    thumbnail: getThumbnailProps(dto, link),
    metadata: getMetadataProps(dto, link),
  };
};

import { camelize } from '@ridi/object-case-converter'

import { BookDto } from './types'
import { BookProps } from '../index';
import { ThumbnailProps } from '../thumbnail'
import { MetadataProps } from '../metadata'

import { getCircleBadge } from './getCircleBadge'

function getThumbnailProps (dto: BookDto, link: string): ThumbnailProps {
  return {
    id: dto.id,
    link,
    title: dto.title.main,
    thumbnail: dto.thumbnail,
    isAdultOnly: dto.property && dto.property.isAdultOnly,
    isComicHD: dto.file && dto.file.isComicHd,
    circleBadge: getCircleBadge(dto),
    setBooklet: dto.setbook,
  }
}

function getMetadataProps (dto: BookDto, link: string): MetadataProps {
  const {
    property: seriesProperty,
    priceInfo: seriesPriceInfo,
    ...series
  } = dto.series

  return {
    id: dto.id,
    link,
    title: dto.title,
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
  }
}

export const dto2props = (data: object): BookProps => {
  const dto: BookDto = camelize(data)
  const link = `/v2/Detail?id=${dto.id}`

  return {
    thumbnail: getThumbnailProps(dto, link),
    metadata: getMetadataProps(dto, link),
  }
}

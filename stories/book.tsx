import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Book, MetadataPresets } from '../components'
import '../../../store/dist/RSGBook.css'

const book = require('./mocks/593000658.json')

storiesOf('Usage case', module)
  .add('basic', () => (
    <Book dto={book} />
  ))
  .add('metadata orderPreset landscape', () => (
    <Book
      dto={book}
      landscape={true}
    >
      {Root => <>
        <Root.Thumbnail />
        <Root.Metadata orderPreset={MetadataPresets.Landscape} />
      </>}
    </Book>
  ))
  .add('shorthand props', () => (
    <Book
      dto={book}
      thumbnailProps={{
        size: 110,
      }}
      metadataProps={{
        orderPreset: MetadataPresets.Landscape,
      }}
    />
  ))
  .add('thumbnail children custom', () => (
    <Book dto={book}>
      {Root => <>
        <Root.Thumbnail>
          {Thumbnail => <>
            <Thumbnail.coverImage />
            <Thumbnail.hdBadge />
          </>}
        </Root.Thumbnail>
      </>}
    </Book>
  ))
  .add('metadata children custom', () => (
    <Book dto={book}>
      {Root => <>
        <Root.Thumbnail />
        <Root.Metadata>
          {Metadata => <>
            <Metadata.title />
          </>}
        </Root.Metadata>
      </>}
    </Book>
  ))

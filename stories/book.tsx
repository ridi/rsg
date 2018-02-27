import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Book, BookPresets } from '../components'
import ReactNodeHandler from '../components/src/reactNodeHandler'
import '../../../store/dist/RSGBook.css'

const book = require('./mocks/593000658.json')

storiesOf('Usage case', module)
  .add('preset', () => <>
    <BookPresets.Portrait dto={book} />
    <BookPresets.MetadataLandscape
      dto={book}
      thumbnailSize={110}
    />
    <BookPresets.Landscape
      dto={book}
      thumbnailSize={110}
    />
  </>)
  .add('custom', () => <>
    <Book dto={book}>
      {({ Thumbnail, Metadata }) => <>
        <Thumbnail.wrapper thumbnailSize={120}>
          <Thumbnail.coverImage />
          <Thumbnail.circleBadge />
          <Thumbnail.hdBadge />
          <Thumbnail.setBooklet />
        </Thumbnail.wrapper>
        <Metadata.wrapper>
          <Metadata.title />
          <Metadata.authors />
        </Metadata.wrapper>
      </>}
    </Book>
    <Book dto={book}>
      {({ Thumbnail, Metadata }) => <>
        <Thumbnail.wrapper>
          <Thumbnail.coverImage />
          <Thumbnail.circleBadge />
          <Thumbnail.hdBadge />
          <Thumbnail.setBooklet />
        </Thumbnail.wrapper>
        <Metadata.wrapper>
          <Metadata.title />
          <Metadata.authors />
        </Metadata.wrapper>
      </>}
    </Book>
  </>)
  .add('override preset', () => (
    <BookPresets.Landscape
      dto={book}
      thumbnailSize={110}
    >
      {({ Thumbnail, Metadata }, preset) => {
        return (ReactNodeHandler(preset)
          .replace('count', <div><p>asdfasdfasdf</p></div>)
          .setProps('authors', { simple: false })
          .result());
      }}
    </BookPresets.Landscape>
  ))

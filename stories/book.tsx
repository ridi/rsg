import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Book, BookPresets } from '../components';
import '../styles/dist/book.css';

const book = require('./mocks/593000658.json'); // tslint:disable-line

storiesOf('Book usage case', module)
  .add('placeholder', () => <>
    <Book
      dto={{
        id: '3',
        thumbnail: {
          large: 'https://misc.ridibooks.com/cover/593000658/large',
          small: '',
          xxlarge: '',
        },
      }}
      className="RSGBook-layout-landscape"
    >
      {({ Thumbnail, Metadata }) => (
        <>
          <Thumbnail.wrapper thumbnailSize={80}>
            <Thumbnail.coverImage size="large" required />
            <Thumbnail.circleBadge required />
            <Thumbnail.hdBadge required />
            <Thumbnail.setBooklet required />
          </Thumbnail.wrapper>
          <Metadata.wrapper layout="landscape">
            <Metadata.title required />
            <Metadata.subTitle required />
            <div className="RSGBookMetadata_Info">
              <Metadata.starRate required />
              <Metadata.authors required simple={true} />
              <Metadata.seriesCount required />
              <Metadata.publisher required />
            </div>
            <Metadata.description required />
            <Metadata.price required />
            <Metadata.bookTypeBadge required />
            <Metadata.someDealBadge required />
          </Metadata.wrapper>
        </>
      )}
    </Book>
    <div style={{ display: 'flex' }}>
      <BookPresets.Portrait
        dto={{ id: '1' }}
        thumbnailSize={100}
      />
      <BookPresets.Portrait
        dto={{ id: '1' }}
        thumbnailSize={100}
      />
      <BookPresets.Portrait
        dto={{ id: '1' }}
        thumbnailSize={100}
      />
      <BookPresets.Portrait
        dto={{ id: '1' }}
        thumbnailSize={100}
      />
    </div>
    <BookPresets.Landscape
      dto={{ id: '1' }}
      thumbnailSize={100}
    />
    <BookPresets.Landscape
      dto={{ id: '1' }}
      thumbnailSize={100}
      metadataExpanded
    />
  </>)
  .add('preset', () => <>
    <div style={{ display: 'flex' }}>
      <BookPresets.Portrait
        dto={book}
        thumbnailSize={80}
      />
      <BookPresets.Portrait
        dto={book}
        thumbnailSize={80}
      />
      <BookPresets.Portrait
        dto={book}
        thumbnailSize={110}
      />
      <BookPresets.Portrait
        dto={book}
        thumbnailSize={110}
      />
    </div>
    <BookPresets.Landscape
      dto={book}
      thumbnailSize={110}
    />
    <BookPresets.Landscape
      dto={book}
      thumbnailSize={110}
      metadataExpanded
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
        <Metadata.wrapper width={120}>
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
      thumbnailSize={80}
      slots={({ Metadata }) => ({
        appendToMetadataInfo: (
          <Metadata.flatrate />
        ),
      })}
    />
  ));

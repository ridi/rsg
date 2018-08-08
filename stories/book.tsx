import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Book } from '../components';
import '../stylesheets/dist/book.css';

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
      className="RSGBook-preset-landscape"
    >
      {({ Thumbnail, Metadata }) => (
        <>
          <Thumbnail.wrapper thumbnailSize={80} link="unused">
            <Thumbnail.coverImage size="large" required />
            <Thumbnail.circleBadge />
            <Thumbnail.hdBadge />
            <Thumbnail.setBooklet />
          </Thumbnail.wrapper>
          <Metadata.wrapper>
            <Metadata.title required link="unused" />
            <Metadata.subTitle required />
            <div className="RSGBookMetadata_Info">
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
  </>)
  .add('unlinked', () => <>
    <Book dto={book} className="RSGBook-preset-landscape">
      {({ Thumbnail, Metadata }) => (
        <>
          <Thumbnail.wrapper thumbnailSize={80} link="unused">
            <Thumbnail.coverImage size="large" required />
            <Thumbnail.circleBadge />
            <Thumbnail.hdBadge />
            <Thumbnail.setBooklet />
          </Thumbnail.wrapper>
          <Metadata.wrapper>
            <Metadata.title required link="unused" />
            <Metadata.subTitle required />
            <div className="RSGBookMetadata_Info">
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
  </>);

import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Book, dto2props } from '../components/'
import '../../../store/dist/RSGBook.css'

const book = require('./mocks/593000658.json')

storiesOf('Usage case', module)
  .add('basic', () => (
    <Book {...dto2props(book)} />
  ))
  .add('custom', () => (
    <Book {...dto2props(book)}>
      {Root => <>
        <Root.Thumbnail />
        <Root.Metadata>
          {Metadata => <>
            <Metadata.starRate />
            <Metadata.publisher />
            <Metadata.authors />
          </>}
        </Root.Metadata>
      </>}
    </Book>
  ))

import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Book, dto2props, MetadataPresets } from '../components'
import '../../../store/dist/RSGBook.css'

const book = require('./mocks/593000658.json')

storiesOf('Usage case', module)
  .add('basic', () => (
    <Book {...dto2props(book)} />
  ))
  .add('metadata orderPreset landscape', () => (
    <Book {...dto2props(book)}>
      {Root => <>
        <Root.Thumbnail />
        <Root.Metadata orderPreset={MetadataPresets.Landscape} />
      </>}
    </Book>
  ))
  .add('metadata children custom', () => (
    <Book {...dto2props(book)}>
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

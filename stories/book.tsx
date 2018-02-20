import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { Book, dto2props } from '../components/'
import '../../../store/dist/RSGBook.css'

const book = require('./mocks/593000658.json')

storiesOf('Book', module)
  .add('basic', () => (
    <Book
      {...dto2props(book)}
      thumbnailSize={110}
    />
  ))

import * as React from 'react';

export enum Orders {
  Author = 'author',
  Translator = 'translator'
}

export interface AuthorProps {
  id?: number
  name: string
}

export type AuthorsProps = {
  [role in Orders]?: AuthorProps[]
}

export interface ComponentProps {
  simple?: true
}

const ORDERS: Orders[] = [
  Orders.Author,
  Orders.Translator
]

const Authors: React.SFC<ComponentProps & AuthorsProps> = (props) => (
  <span className='RSGBookMetadata_Authors'>
  </span>
)

export { Authors }

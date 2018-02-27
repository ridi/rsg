import * as React from 'react';
import classNames from 'classnames'

export enum Role {
  Author = 'author',
  Translator = 'translator',
  Illustrator = 'illustrator'
}

export interface AuthorProps {
  id?: number
  name: string
}

export type AuthorsProps = {
  [role in Role]?: AuthorProps[]
}

export interface ComponentProps {
  simple?: true
  classNames?: any
}

const ORDERS: Role[] = [
  Role.Author,
  Role.Translator,
  Role.Illustrator
]

const Author: React.SFC<AuthorProps> = ({ id, name }) => {
  const link = id ? `/author/${id}` : `/search/?q=${name}`
  return <a href={link}>{name}</a>
}

const Authors: React.SFC<ComponentProps & AuthorsProps> = (props) => (
  <ol className={classNames(`${'RSGBookMetadata'}_Authors`, props.classNames)}>
    {
      ORDERS.map(role => props[role].map(author => (
        <li key={author.id || author.name}>
          <Author {...author} />
        </li>
      )))
    }
  </ol>
)

export { Authors }

import classNames from 'classnames';
import * as React from 'react';

export enum Role {
  Author = 'author',
  Translator = 'translator',
  Illustrator = 'illustrator',
}

export interface AuthorProps {
  id?: number;
  name: string;
}

export type AuthorsProps = {
  [role in Role]?: AuthorProps[]
};

export interface ComponentProps {
  simple?: true;
  className?: any;
}

const ORDERS: Role[] = [
  Role.Author,
  Role.Translator,
  Role.Illustrator,
];

const Author: React.SFC<AuthorProps> = ({ id, name }) => {
  const link = id ? `/author/${id}` : `/search/?q=${name}`;
  return <a href={link} className="RSGBookMetadata_AuthorLink">{name}</a>;
};

const Authors: React.SFC<ComponentProps & AuthorsProps> = (props) => (
  <ol className={classNames(`${'RSGBookMetadata'}_Authors`, props.className)}>
    {
      ORDERS.map((role) => (props[role] || []).map((author) => (
        <li key={author.id || author.name} className="RSGBookMetadata_AuthorList">
          <Author {...author} />
        </li>
      )))
    }
  </ol>
);

export { Authors };

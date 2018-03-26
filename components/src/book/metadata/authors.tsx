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

export type Authors = {
  [role in Role]?: AuthorProps[]
};

export type ComponentProps = {
  simple?: true;
  className?: string;
};

const ORDERS: Role[] = [
  Role.Author,
  Role.Translator,
  Role.Illustrator,
];

const Author: React.SFC<AuthorProps> = ({ id, name }) => {
  const link = id ? `/author/${id}` : `/search/?q=${name}`;
  return <a href={link} className="RSGBookMetadata_AuthorLink">{name}</a>;
};

export default function(data: Authors = {} as Authors): React.SFC<ComponentProps> {
  return ({ simple, className }) => (
    <ol className={classNames('RSGBookMetadata_Authors', className)}>
      {
        ORDERS.map((role) => (data[role] || []).map((author) => (
          <li key={author.id || author.name} className="RSGBookMetadata_AuthorList">
            <Author {...author} />
          </li>
        )))
      }
    </ol>
  );
}

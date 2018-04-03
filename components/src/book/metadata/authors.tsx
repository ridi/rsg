import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

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

const ORDERS: Role[] = [
  Role.Author,
  Role.Translator,
  Role.Illustrator,
];

const Author: React.SFC<AuthorProps> = ({ id, name }) => {
  const link = id ? `/author/${id}` : `/search/?q=${name}`;
  return <a href={link} className="RSGBookMetadata_AuthorLink">{name}</a>;
};

export default (data: Authors = {} as Authors): React.SFC<ComponentProps & {
  simple?: true;
}> => (props) => {
  const { simple, className, required, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required);
  if (Placeholder) { return <Placeholder />; }

  return (
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
};

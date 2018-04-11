import classNames from 'classnames';
import * as React from 'react';

import {
  ChildrenData as Data,
  ChildrenProps as ComponentProps,
} from '../index';

export enum Role {
  Author = 'author',
  StoryWriter = 'storyWriter',
  Illustrator = 'illustrator',
  Translator = 'translator',
  Photo = 'photo',
  BiblioIntro = 'biblioIntro',
  Commentator = 'commentator',
  Editor = 'editor',
  OrigAuthor = 'origAuthor',
  OrigIllustrator = 'origIllustrator',
  Planner = 'planner',
  Supervisor = 'supervisor',
  Performer = 'performer',
  Compiler = 'compiler',
}

export interface AuthorProps {
  id?: number;
  name: string;
}

export type Authors = {
  [role in Role]?: AuthorProps[]
};

const Author: React.SFC<AuthorProps & { className: string }> = ({ id, name, className }) => {
  const authorLink = id ? `/author/${id}` : `/search/?q=${name}`;
  return <a href={authorLink} className={className}>{name}</a>;
};

export default (data: Data & Authors): React.SFC<ComponentProps & {
  simple?: true;
}> => (props) => {
  const MAX_DISPLAY_COUNT = 2;
  const { simple, className, required } = props;

  const { orderedAuthors, remainingAuthorCount, count } = (() => {
    let priorities;
    if (data[Role.Author]) {
      priorities = [Role.Author, Role.Illustrator];
    } else if (data[Role.OrigAuthor]) {
      priorities = [Role.Illustrator, Role.OrigAuthor];
    } else {
      priorities = [
        Role.StoryWriter,
        Role.Illustrator,
        Role.Editor,
        Role.Photo,
        Role.Planner,
        // Role.Translator, TODO: 확인필요 - 저자가 없고 번역만 있으면 이상함
        Role.Commentator,
        Role.BiblioIntro,
      ];
    }
    const authors = priorities.flatMap((role) => data[role] || []);
    const count = authors.length; // tslint:disable-line:no-shadowed-variable
    return {
      orderedAuthors: authors.splice(0, MAX_DISPLAY_COUNT),
      remainingAuthorCount: count - MAX_DISPLAY_COUNT,
      count,
    };
  })();

  const Placeholder = data.setPlaceholder(props.required, !count);
  if (Placeholder) { return <Placeholder className={data.className} />; }

  return (
    <div className={classNames(data.className, className)}>
      {orderedAuthors.map((author, index) => (
        <React.Fragment key={author.id || author.name}>
          {index > 0 && ', '}
          <Author className={`${data.className}_Item`} {...author} />
        </React.Fragment>
      ))}
      {remainingAuthorCount > 0 && (
        <span className={`${data.className}_Item`}>외 {remainingAuthorCount}명</span>
      )}
    </div>
  );
};

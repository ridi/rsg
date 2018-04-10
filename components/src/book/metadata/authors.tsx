import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps } from '../index';

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

const Author: React.SFC<AuthorProps> = ({ id, name }) => {
  const authorLink = id ? `/author/${id}` : `/search/?q=${name}`;
  return (<a href={authorLink} className="RSGBookMetadata_AuthorList">{name}</a>);
};

const RemainingAuthorsCount: React.SFC<{count: number}> = ({count}) => {
  return (<span className="RSGBookMetadata_AuthorList">&nbsp;외 {count}명</span>);
};

export default (data: Authors): React.SFC<ComponentProps & {
  simple?: true;
}> => (props) => {
  const MAX_DISPLAY_COUNT = 2;
  const { simple, className, required, setPlaceholder } = props;

  const Placeholder = setPlaceholder(props.required, !data);
  if (Placeholder) { return <Placeholder />; }

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
        //Role.Translator, TODO: 확인필요 - 저자가 없고 번역만 있으면 이상함
        Role.Commentator,
        Role.BiblioIntro,
      ];
    }
    const authors = priorities.flatMap((role) => data[role] || []);
    const count = authors.length;
    return {
      orderedAuthors: authors.splice(0, MAX_DISPLAY_COUNT),
      remainingAuthorCount: count - MAX_DISPLAY_COUNT,
      count,
    };
  })();

  return (
    <p className={classNames('RSGBookMetadata_Authors', className)}>
      {orderedAuthors.map((author, index) => (
        <React.Fragment key={author.id || author.name}>
          {index > 0 && ', '}
          <Author {...author} />
        </React.Fragment>
      ))}
      {remainingAuthorCount > 0 && <RemainingAuthorsCount count={remainingAuthorCount} />}
    </p>
  );
};

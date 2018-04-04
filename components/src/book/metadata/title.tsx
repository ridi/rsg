import classNames from 'classnames';
import * as React from 'react';
import { GrandChildrenProps as ComponentProps, Track } from '../index';

export interface Title {
  title: string;
  link: string;
  track?: Track;
}

export default ({ title, link, track = {} as Track }: Title): React.SFC<ComponentProps> => (props) => {
  const { className, setPlaceholder } = props;
  const trackClass = track && track.isLazyLoading ? 'trackable_lazy' : 'trackable';

  const Placeholder = setPlaceholder(props.required, !title);
  if (Placeholder) { return <Placeholder />; }

  return title ? (
    <a
      className={trackClass}
      href={link}
      data-track-params={track && track.params}
      data-track-type={track.type && track.type.join(',')}
    >
      <p className={classNames(['RSGBookMetadata_Title', className])}>
        {title}
      </p>
    </a>
  ) : null;
};

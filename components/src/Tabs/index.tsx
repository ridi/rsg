import classNames from 'classnames';
import * as React from 'react';

export interface TabProps {
  active?: boolean;
  className?: string;
  url?: string;
  title?: string;
  subtitle?: string;
}

export const Tab: React.SFC<TabProps> = (props) => {
  const {
    active,
    className,
    url,
    title,
    subtitle,
  } = props;

  return (
    <li className={classNames('RUITab_Item', className)}>
      <a href={url} className={classNames('RUITab_ItemButton', { active })}>
        {title}
        <span className="RUITab_ItemCount">
          {subtitle}
        </span>
      </a>
    </li>
  );
};

export interface TabsProps {
  className?: string;
  children?: Array<React.ReactElement<TabProps>> | React.ReactElement<TabProps>;
}

export const Tabs: React.SFC<TabsProps> = (props) => {
  const {
    children,
    className,
  } = props;

  return (
    <ul
      className={classNames(
        'RUITab',
        'RUITab-activeColor-black',
        className,
      )}
    >
      {children}
    </ul>
  );
};

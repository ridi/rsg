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
  activeColor?: 'black' | 'blue';
  className?: string;
  children?: Array<React.ReactElement<TabProps>> | React.ReactElement<TabProps>;
  flex?: boolean;
}

export const Tabs: React.SFC<TabsProps> = (props) => {
  const {
    activeColor = 'black',
    children,
    className,
    flex,
  } = props;

  return (
    <ul
      className={classNames(
        'RUITab',
        `RUITab-activeColor-${activeColor}`,
        { 'RUITab-flex': flex },
        className,
      )}
    >
      {children}
    </ul>
  );
};

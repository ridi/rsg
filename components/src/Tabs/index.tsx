import classNames from 'classnames';
import * as React from 'react';

export interface TabProps {
  active?: boolean;
  className?: string;
  href?: string;
  title?: string;
  subtitle?: string;
  value?: any;
  onClick?: (e: React.SyntheticEvent<any>, value: any) => void;
}

export const Tab: React.SFC<TabProps> = (props) => {
  const {
    active,
    className,
    href,
    title,
    subtitle,
    value,
    onClick,
  } = props;

  return (
    <li className={classNames('RUITab_Item', className)}>
      <a
        className={classNames('RUITab_ItemButton', { active })}
        href={href}
        onClick={(e) => onClick(e, value)}
      >
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

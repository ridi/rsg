import classNames from 'classnames';
import * as React from 'react';

export interface TabProps {
  active?: boolean;
  children?: React.ReactNode;
  className?: string;
  href?: string;
  value?: any;
  onClick?: (e: React.SyntheticEvent<any>, value: any) => void;
}

export const Tab: React.SFC<TabProps> = (props) => {
  const {
    active,
    children,
    className,
    href,
    value,
    onClick,
  } = props;

  return (
    <li className={classNames('RUITab', className)}>
      <a
        className={classNames('RUITab_Button', { active })}
        href={href}
        onClick={(e) => onClick(e, value)}
      >
        {children}
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
        'RUITabs',
        `RUITabs-activeColor-${activeColor}`,
        { 'RUITabs-flex': flex },
        className,
      )}
    >
      {children}
    </ul>
  );
};

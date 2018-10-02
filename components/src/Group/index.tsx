import classNames from 'classnames';
import * as React from 'react';

export interface GroupProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
  component?: React.ReactType;
}

export const Group: React.SFC<GroupProps> = (props) => {
  const {
    className,
    orientation = 'horizontal',
    component,
  } = props;

  const Wrapper = component || 'div';

  const children = React.Children.map(props.children, (
    child: React.ReactElement<{ className: string }>,
  ) => {
    return React.isValidElement(child) && typeof child.type !== 'string'
      ? React.cloneElement(child, { className: classNames(child.props.className, 'RUIGroup_Element') })
      : child;
  });

  return (
    <Wrapper className={classNames(
      'RUIGroup',
      `RUIGroup-${orientation}`,
      className,
    )}>
      {children}
    </Wrapper>
  );
};

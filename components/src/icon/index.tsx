import classNames from 'classnames';
import { camelCase, uniq } from 'lodash-es';
import * as React from 'react';

import {
  default as Icons,
  Icons as IconsInterface,
} from 'rsg/svg/icons';

export interface IconProps {
  name: keyof IconsInterface;
  className?: string;
}

export const Icon: React.SFC<IconProps> = (props) => {
  const icon = Icons[props.name];

  if (!icon) { return null; }

  const [width, height, contents] = icon;
  const viewBox = `0 0 ${width} ${height}`;
  const name = props.name.replace(/_\d+/, '');

  const classList = uniq([
    'RSGIcon',
    `RSGIcon-${camelCase(name)}`,
    `RSGIcon-${camelCase(props.name)}`,
    props.className,
  ]);

  return (
    <svg
      className={classNames(classList)}
      viewBox={viewBox}
      dangerouslySetInnerHTML={{ __html: contents }}
    />
  );
};

import * as React from 'react';

import {
  ComponentProps,
  RootComponents,
} from './index';

import Landscape from './presets/landscape';
import Portrait from './presets/portrait';

export type Preset<T = {}> = React.SFC<ComponentProps & T & {
  children?: (el: JSX.Element, Root?: RootComponents) => JSX.Element;
  thumbnailSize: number;
}>;

export const BookPresets = {
  Portrait,
  Landscape,
};

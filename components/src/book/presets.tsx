import * as React from 'react';

import {
  ComponentProps,
  RootComponents,
} from './index';

import Landscape from './presets/landscape';
import Portrait from './presets/portrait';

export type Preset<P = {}, S = {}> = React.SFC<ComponentProps & P & {
  slots?: (Root: RootComponents) => S
  thumbnailSize: number;
}>;

export const BookPresets = {
  Portrait,
  Landscape,
};

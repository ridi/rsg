import * as React from 'react';

import { BookComponentProps, ChildComponents } from '../index';
import { ThumbnailSize } from '../thumbnail/wrapper';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PresetType = Omit<BookComponentProps, 'children'>;

export type Preset<P = {}, S = {}> = React.SFC<PresetType & P & {
  slots?: (Root: ChildComponents) => S
  thumbnailSize: ThumbnailSize;
}>;

import * as React from 'react';

import { ChildComponents } from './index'
import BaseProps from './baseProps'

export enum Constants {
  Basic = 'basic',
}

const basic = (baseProps: BaseProps) => {
  const Components = new ChildComponents(baseProps)
  return <>
    <Components.title />
    <Components.authors simple={true} />
  </>
}

export type presets = { [name in Constants]: React.SFC<BaseProps> }
export const presets: presets = {
  basic,
}

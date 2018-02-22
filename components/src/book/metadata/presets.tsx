import * as React from 'react';

import ChildComponents from './index'
import BaseProps from './baseProps'

export enum Constants {
  Basic = 'basic',
  Landscape = 'landscape',
}

const basic = (baseProps: BaseProps) => {
  const Components = new ChildComponents(baseProps)
  return <>
    <Components.title />
    <Components.authors simple={true} />
  </>
}

const landscape = (baseProps: BaseProps) => {
  const Components = new ChildComponents(baseProps)
  return <>
    <Components.title />
    <Components.authors simple={true} />
    <Components.count />
    <Components.publisher />
    <Components.description />
    <Components.price />
  </>
}

export type Presets = { [name in Constants]: React.SFC<BaseProps> }
export const presets: Presets = {
  basic,
  landscape,
}

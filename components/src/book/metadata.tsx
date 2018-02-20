import * as React from 'react';
import classNames from 'classnames'

import { MetadataChildren, ChildComponents } from './metadata/'
import { BaseProps } from './metadata/baseProps'
import { presets, Constants as PresetEnums } from './metadata/presets'

export interface ComponentProps {
  orderPreset?: PresetEnums
  withoutWrapper?: boolean
  children?: (Components: MetadataChildren) => React.ReactElement<any>
  landscape?: boolean
}

export interface MetadataProps extends BaseProps, ComponentProps {}

const Metadata: React.SFC<MetadataProps> = (props) => {
  const {
    orderPreset,
    withoutWrapper,
    children,
    landscape,
    ...baseProps,
  } = props

  const Components = new ChildComponents(baseProps)

  const orientation = landscape ? 'landscape' : 'portrait'
  const classList = [
    'RSGBookMetadata',
    `RSGBookMetadata-orientation-${orientation}`,
  ]

  if (typeof children === 'function') {
    return withoutWrapper
      ? children(Components)
      : <div className={classNames(classList)}>{children(Components)}</div>
  }

  return (
    <div className={classNames(classList)}>
      {presets[orderPreset || PresetEnums.Basic].map(child => {
        const Tag = Components[child]
        return <Tag key={child}/>
      })}
    </div>
  )
}

export { Metadata, PresetEnums }

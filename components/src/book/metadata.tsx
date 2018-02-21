import * as React from 'react';
import classNames from 'classnames'

import { MetadataChildren, ChildComponents, MetadataProps } from './metadata/'
import { presets, Constants as PresetEnums } from './metadata/presets'

export interface ComponentProps {
  orderPreset?: PresetEnums
  withoutWrapper?: boolean
  children?: (Components: MetadataChildren) => React.ReactElement<any>
  landscape?: boolean
}

const Metadata: React.SFC<MetadataProps & ComponentProps> = (props) => {
  const {
    orderPreset,
    withoutWrapper,
    children,
    landscape,
    ...metadataProps,
  } = props

  const Components = new ChildComponents(metadataProps)

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

export { Metadata, MetadataProps, PresetEnums }

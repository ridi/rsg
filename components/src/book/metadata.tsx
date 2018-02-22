import * as React from 'react';
import classNames from 'classnames'

import ChildComponents, { MetadataProps } from './metadata/'
import { presets, Constants as PresetEnums } from './metadata/presets'

export interface ComponentProps {
  orderPreset?: PresetEnums
  withoutWrapper?: boolean
  children?: (Components: ChildComponents) => React.ReactElement<any>
  landscape?: boolean
  classNames?: any
}

const Metadata: React.SFC<MetadataProps & ComponentProps> = (props) => {
  const {
    orderPreset,
    withoutWrapper,
    children,
    landscape,
    ...metadataProps,
  } = props

  const orientation = landscape ? 'landscape' : 'portrait'
  const classList = [
    'RSGBookMetadata',
    `RSGBookMetadata-orientation-${orientation}`,
  ]

  if (typeof children === 'function') {
    const Components = new ChildComponents(metadataProps)
    return withoutWrapper ? children(Components) : (
      <div className={classNames(classList, props.classNames)}>
        {children(Components)}
      </div>
    )
  }

  return (
    <div className={classNames(classList, props.classNames)}>
      {presets[orderPreset || PresetEnums.Basic](metadataProps)}
    </div>
  )
}

export { Metadata, MetadataProps, PresetEnums }

import * as React from 'react';
import classNames from 'classnames'

import ChildComponents, { MetadataProps } from './metadata/'
import { presets, Constants as PresetEnums } from './metadata/presets'

export const BLOCK_NAME = 'RSGBookMetadata'

export interface ComponentProps {
  orderPreset?: PresetEnums
  withoutWrapper?: boolean
  children?: (Components: ChildComponents) => React.ReactElement<any>
  classNames?: any
}

const Metadata: React.SFC<MetadataProps & ComponentProps> = (props) => {
  const {
    orderPreset,
    withoutWrapper,
    children,
    ...metadataProps,
  } = props

  if (typeof children === 'function') {
    const Components = new ChildComponents(metadataProps)
    return withoutWrapper ? children(Components) : (
      <div className={classNames(BLOCK_NAME, props.classNames)}>
        {children(Components)}
      </div>
    )
  }

  return (
    <div className={classNames(
      BLOCK_NAME,
      props.classNames,
      `${BLOCK_NAME}-preset-${orderPreset}`,
    )}>
      {presets[orderPreset || PresetEnums.Basic](metadataProps)}
    </div>
  )
}

export { Metadata, MetadataProps, PresetEnums }

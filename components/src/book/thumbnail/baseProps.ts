import { CoverProps } from './children/coverImage'
import { CircleBadgeProps } from './children/circleBadge'
import { HDBadgeProps } from './children/HDBadge'
import { SetBookletProps } from './children/setBooklet'


export default interface BaseProps extends CoverProps, HDBadgeProps {
  id?: string
  circleBadge: CircleBadgeProps
  setBooklet: SetBookletProps
}
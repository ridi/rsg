import { CoverProps } from '../thumbnail/coverImage'
import { CircleBadgeProps } from '../thumbnail/circleBadge'
import { HDBadgeProps } from '../thumbnail/hdBadge'
import { SetBookletProps } from '../thumbnail/setBooklet'


export interface ThumbnailProps extends CoverProps, HDBadgeProps {
  id?: string
  circleBadge: CircleBadgeProps
  setBooklet: SetBookletProps
}

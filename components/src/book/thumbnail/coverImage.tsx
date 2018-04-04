import * as React from 'react';

export interface CoverProps {
  link: string
  thumbnail: {
    small: string | null
    large: string | null
    xxlarge: string | null
  }
  isAdultOnly: boolean
}

const Cover: React.SFC<CoverProps> = (props) => (
  <a href={props.link}>
    <img src={props.thumbnail.large}/>
  </a>
)

export { Cover }

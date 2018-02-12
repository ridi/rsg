import * as React from 'react';

export interface AuthorProps {
  id?: number
  name: string
}
export interface AuthorsProps {
  [role: string]: AuthorProps[]
}

const order = ['author', 'translator', '']

const Authors: React.SFC<AuthorsProps> = (props) => (
  <span className='rsgBook__metadata__authors'>
  </span>
)

export { Authors }

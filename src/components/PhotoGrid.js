import React from 'react'

import Photo from './Photo'

const PhotoGrid = props => (
  <div className='photo-grid'>
    {props.posts.map((p, i) => <Photo key={i} i={i} post={p} {...props} />)}
  </div>
)

export default PhotoGrid

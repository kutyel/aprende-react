import React from 'react'

import Photo from './Photo'
import Comments from './Comments'

const Single = props => {
  const { postId } = props.params
  const index = props.posts.findIndex(p => p.id === postId)
  const post = props.posts[index]
  const comments = props.comments[postId] || []

  return (
    <div className='single-photo'>
      <Photo i={index} post={post} {...props} />
      <Comments postComments={comments} {...props} />
    </div>
  )
}

export default Single

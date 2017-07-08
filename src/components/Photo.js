import React from 'react'
import { Link } from 'react-router'
// TODO: importar aquí `react-replace-string`
import CSSTransitionGroup from 'react-addons-css-transition-group'

// TODO: importar nuestro componente `Hashtag` (hay que crearlo primero :)

const Photo = ({ post, i, increment, decrement, comments }) => (
  <figure className='grid-figure'>
    <div className='grid-photo-wrap'>
      <Link to={`/view/${post.id}`}>
        <img src={post.images.standard_resolution.url} alt={post.caption.id} className='grid-photo' />
      </Link>
      <CSSTransitionGroup
        transitionName='like'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <span key={post.likes.count} className='likes-heart'>{post.likes.count}</span>
      </CSSTransitionGroup>
    </div>
    <figcaption>
      {/*
        TODO: reemplazar esta línea utilizando `react-replace-string`
        (Pista: https://github.com/iansinnott/react-string-replace)
      */}
      <p>{post.caption.text}</p>
      <div className='control-buttons'>
        <button
          onClick={() => post.user_has_liked ? decrement(i) : increment(i)}
          className={post.user_has_liked && 'liked'}>&hearts; {post.likes.count}</button>
        <Link className='button' to={`/view/${post.id}`}>
          <span className='comment-count'>
            <span className='speech-bubble' />
            {comments[post.id] ? comments[post.id].length : 0}
          </span>
        </Link>
      </div>
    </figcaption>
  </figure>
)

export default Photo

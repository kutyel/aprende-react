import React from 'react'
import { Link } from 'react-router'
import replace from 'react-string-replace'
import CSSTransitionGroup from 'react-addons-css-transition-group'

import Hashtag from './Hashtag'

const Photo = ({ post, i, increment, decrement, comments }) => (
  <figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={`/view/${post.id}`}>
        <img
          src={post.images.standard_resolution.url}
          alt={post.caption.id}
          className="grid-photo"
        />
      </Link>
      <CSSTransitionGroup
        transitionName="like"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <span key={post.likes.count} className="likes-heart">
          {post.likes.count}
        </span>
      </CSSTransitionGroup>
    </div>
    <figcaption>
      <p>
        {replace(post.caption.text, /#(\w+)/g, (match, i) => (
          <Hashtag key={i} text={match} />
        ))}
      </p>
      <div className="control-buttons">
        <button
          onClick={() => (post.user_has_liked ? decrement(i) : increment(i))}
          className={post.user_has_liked && 'liked'}
        >
          &hearts; {post.likes.count}
        </button>
        <Link className="button" to={`/view/${post.id}`}>
          <span className="comment-count">
            <span className="speech-bubble" />
            {comments[post.id] ? comments[post.id].length : 0}
          </span>
        </Link>
      </div>
    </figcaption>
  </figure>
)

export default Photo

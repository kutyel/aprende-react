import React, { Component } from 'react'
// TODO: aquí también vamos a necesitar `react-string-replace`

// TODO: añade aquí el componente @Mention (primero hay que crearlo :)
import CommentForm from './CommentForm'

class Comments extends Component {
  state = { showComments: true }

  toggleComments = () => this.setState(({ showComments }) =>
    ({ showComments: !showComments }))

  renderComment = ({ from: { full_name: name }, text }, i) => (
    <div className='comment' key={i}>
      <p>
        <strong>{name}</strong>
        {/* TODO: reemplaza el texto de los comentarios
          añadiendo las menciones a otros @usuarios */}
        {text}
        <button
          onClick={() => this.props.removeComment(this.props.params.postId, i)}
          className='remove-comment'>&times;</button>
      </p>
    </div>
  )

  render = () => (
    <div className='comments'>
      {this.state.showComments && (<div className='comments-list'>
        {this.props.postComments.map(this.renderComment.bind(this))}
        <CommentForm {...this.props} />
      </div>)}
      <div className='control-buttons'>
        <button onClick={this.toggleComments}>
          {this.state.showComments ? 'Hide' : 'Show'} comments
        </button>
      </div>
    </div>
  )
}

export default Comments

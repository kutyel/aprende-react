import React, { Component } from 'react'

class Comments extends Component {
  state = { showComments: true }

  // TODO: haz tu propio método `handleClick` para modificar el estado

  renderComment = ({ from: { full_name: name }, text }, i) => (
    <div className='comment' key={i}>
      <p>
        <strong>{name}</strong>
        {text}
        <button
          onClick={() => this.props.removeComment(this.props.params.postId, i)}
          className='remove-comment'>&times;</button>
      </p>
    </div>
  )

  render = () => (
    <div className='comments'>
      {/* TODO: tienes que evitar que se rendericen los
        comentarios si `showComments === false` */}
      <div className='comments-list'>
        {this.props.postComments.map(this.renderComment.bind(this))}
      </div>
      <div className='control-buttons'>
        {/* TODO: haz que el botón llame a tu nuevo método (Pista: `onClick`)  */}
        <button onClick={this.toggleComments}>
          {/* TODO: el texto del botón también tiene que cambiar... */}
          Hide comments
        </button>
      </div>
    </div>
  )
}

export default Comments

import React, { Component } from 'react'

class CommentForm extends Component {
  submit = e => {
    e.preventDefault();
    // TODO: aquí necesitas 2 variables...
    // 1) el input con el autor del comentario
    // 2) el input con el texto del comentario
    const { postId } = this.props.params
    this.props.addComment(postId, /* TODO: author, comment */)
    // TODO: no te olvides de resetear el formulario cuando acabes! 👆🏼
  }

  render = () => (
    // TODO: añade el evento `submit` y las `refs` que necesites!
    <form className='comment-form'>
      <input type='text' placeholder='author' />
      <input type='text' placeholder='comment' />
      <input type='submit' hidden />
    </form>
  )
}

export default CommentForm

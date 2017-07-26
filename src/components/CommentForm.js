import React, { Component } from 'react'

class CommentForm extends Component {
  submit = e => {
    e.preventDefault();
    const author = this.author.value
    const comment = this.comment.value
    const { postId } = this.props.params
    this.props.addComment(postId, author, comment)
    this.form.reset()
  }

  render = () => (
    <form ref={form => this.form = form} className='comment-form' onSubmit={this.submit}>
      <input type='text' placeholder='author' ref={input => this.author = input} />
      <input type='text' placeholder='comment' ref={input => this.comment = input} />
      <input type='submit' hidden />
    </form>
  )
}

export default CommentForm

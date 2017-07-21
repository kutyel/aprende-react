import React, { Component } from 'react'
import replace from 'react-string-replace'

import Mention from './Mention'

class Comments extends Component {
  state = { show: true }

  toggleComments = () => this.setState(({ show }) =>
    ({ show: !show }))

  renderComment = ({ from: { full_name: name }, text }, i) => (
    <div className='comment' key={i}>
      <p>
        <strong>{name}</strong>
        {replace(text, /@(\w+)/g, (user, i) => <Mention key={i} user={user} />)}
        <button
          onClick={() => this.props.removeComment(this.props.params.postId, i)}
          className='remove-comment'>&times;</button>
      </p>
    </div>
  )

  submit = (e) => {
    e.preventDefault();
    const author = this.author.value
    const comment = this.comment.value
    const { postId } = this.props.params
    this.props.addComment(postId, author, comment)
    this.form.reset()
  }

  render = () => (
    <div className='comments'>
      {this.state.show && (<div className='comments-list'>
        {this.props.postComments.map(this.renderComment)}
        <form ref={form => this.form = form} className='comment-form' onSubmit={this.submit}>
          <input type='text' placeholder='author' ref={input => this.author = input} />
          <input type='text' placeholder='comment' ref={input => this.comment = input} />
          <input type='submit' hidden />
        </form>
      </div>)}
      <div className='control-buttons'>
        <button onClick={this.toggleComments}>
          {this.state.show ? 'Hide' : 'Show'} comments
        </button>
      </div>
    </div>
  )
}

export default Comments

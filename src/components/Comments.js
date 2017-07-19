import React, { Component } from 'react'

class Comments extends Component {
  state = { showComments: true }

  toggleComments = () => this.setState(({ showComments }) =>
    ({ showComments: !showComments }))

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
      {this.state.showComments && (<div className='comments-list'>
        {this.props.postComments.map(this.renderComment.bind(this))}
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

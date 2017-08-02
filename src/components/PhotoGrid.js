import React, { Component } from 'react'

import Photo from './Photo'

const API_URL = 'https://gist.githubusercontent.com/kutyel/8f2d287ceb0a04bf3edb2e435b07f61d/raw/623cfaee5cfae55783c4f22366f6e4db92a98e2d/catstagram.json'

class PhotoGrid extends Component {
  state = { posts: [] }

  componentDidMount = async () => {
    try {
      // TODO: haya el modo de traerte los posts del servidor!
      // TODO: this.setState({ posts }) Pista: usa `fetch` 😄
    } catch (err) {
      // TODO: no te olvides del error handling! ⚠️
    }
  }

  render = () => (
    <div className='photo-grid'>
      {this.state.posts.map((p, i) => <Photo key={i} i={i} post={p} {...this.props} />)}
    </div>
  )
}

export default PhotoGrid

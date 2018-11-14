import { identity } from 'ramda'
import { createStore, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers'
import posts from './data/posts.json'
import comments from './data/comments.json'

const defaultState = { posts, comments }
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : identity
)
const store = createStore(reducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)
export default store

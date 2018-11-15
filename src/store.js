import { createLogger } from 'redux-logger'
import { browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers'
import posts from './data/posts.json'
import comments from './data/comments.json'

const initialState = { posts, comments }
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(createLogger())
)

export const history = syncHistoryWithStore(browserHistory, store)
export default store

import { identity } from 'ramda'
import { createStore, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducer from './reducers'
import posts from './data/posts.json'
import comments from './data/comments.json'

const defaultState = { posts, comments }
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, defaultState, composeEnchancers(identity))

export const history = syncHistoryWithStore(browserHistory, store)
export default store

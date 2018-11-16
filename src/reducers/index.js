import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import posts from './posts'
import comments from './comments'

export default combineReducers({ posts, comments, routing })

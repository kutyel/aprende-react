import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import posts from './posts'
import comments from './comments'

const root = combineReducers({ posts, comments, routing })

export default root

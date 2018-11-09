import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/types'

const postComments = (
  state = [],
  { type, index, author: full_name, comment: text }
) => {
  switch (type) {
    case ADD_COMMENT:
      return [...state, { from: { full_name }, text }]
    case REMOVE_COMMENT:
      return [...state.slice(0, index), ...state.slice(index + 1)]
    default:
      return state
  }
}

export default (state = [], action) =>
  !action.postId
    ? state
    : {
        ...state,
        [action.postId]: postComments(state[action.postId], action),
      }

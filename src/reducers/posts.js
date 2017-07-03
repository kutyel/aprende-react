import * as types from '../actions/actionTypes'

const posts = (state = [], { type, index, posts }) => {
  switch (type) {
    case types.INCREMENT_LIKES:
      return [
        ...state.slice(0, index),
        { ...state[index], likes: { count: state[index].likes.count + 1 }, user_has_liked: true },
        ...state.slice(index + 1)
      ]
    case types.DECREMENT_LIKES:
      return [
        ...state.slice(0, index),
        { ...state[index], likes: { count: state[index].likes.count - 1 }, user_has_liked: false },
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

export default posts

import { INCREMENT_LIKES, DECREMENT_LIKES } from '../actions/types'

export default (state = [], { type, index }) => {
  switch (type) {
    case INCREMENT_LIKES:
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          likes: { count: state[index].likes.count + 1 },
          user_has_liked: true,
        },
        ...state.slice(index + 1),
      ]
    case DECREMENT_LIKES:
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          likes: { count: state[index].likes.count - 1 },
          user_has_liked: false,
        },
        ...state.slice(index + 1),
      ]
    default:
      return state
  }
}

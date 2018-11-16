import { over, lensPath, inc, dec, not } from 'ramda'

import { INCREMENT_LIKES, DECREMENT_LIKES } from '../actions/types'

export default (state = [], { type, index }) => {
  const lenseCount = lensPath([index, 'likes', 'count'])
  const liked = over(lensPath([index, 'user_has_liked']), not, state)
  switch (type) {
    case INCREMENT_LIKES:
      return over(lenseCount, inc, liked)
    case DECREMENT_LIKES:
      return over(lenseCount, dec, liked)
    default:
      return state
  }
}

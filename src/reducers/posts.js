import { over, lensPath, inc, dec, not } from 'ramda'
import { INCREMENT_LIKES, DECREMENT_LIKES } from '../actions/types'

export default (state = [], { type, index }) => {
  const lenseLike = lensPath([index, 'user_has_liked'])
  const lenseCount = lensPath([index, 'likes', 'count'])
  switch (type) {
    case INCREMENT_LIKES:
      return over(lenseCount, inc, over(lenseLike, not, state))
    case DECREMENT_LIKES:
      return over(lenseCount, dec, over(lenseLike, not, state))
    default:
      return state
  }
}

import {
  INCREMENT_LIKES,
  DECREMENT_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './actionTypes'

export const increment = index => ({ type: INCREMENT_LIKES, index })
export const decrement = index => ({ type: DECREMENT_LIKES, index })
export const addComment = (postId, author, comment) => ({
  type: ADD_COMMENT,
  postId,
  author,
  comment,
})
export const removeComment = (postId, index) => ({
  type: REMOVE_COMMENT,
  index,
  postId,
})

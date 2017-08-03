import {REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_REDDIT} from '../types'

const defaultPostsState = {
  isFetching: false,
  didInvalidate: false,
  items: []
}

const posts = (state = Object.assign({}, defaultPostsState), {type, posts, receivedAt}) => {
  switch (type) {
    case INVALIDATE_REDDIT:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: posts,
        lastUpdated: receivedAt
      }
    default:
      return state
  }
}

export default(state = {}, action) => {
  const {type, reddit} = action
  switch (type) {
    case INVALIDATE_REDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [reddit]: posts(state[reddit], action)
      }
    default:
      return state
  }
}

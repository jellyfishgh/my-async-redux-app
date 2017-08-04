import merge from 'lodash/merge'

export default (
  state = {
    users: {},
    repos: {}
  },
  action
) => {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

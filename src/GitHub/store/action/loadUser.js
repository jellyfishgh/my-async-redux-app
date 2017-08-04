import { CALL_API, Schemas } from '../middleware/api'
import types from '../types'

const fetchUser = login => ({
  [CALL_API]: {
    types: types('USER'),
    endpoint: `users/${login}`,
    schema: Schemas.USER
  }
})

export default (login, requiredFields = []) => (dispatch, getState) => {
  const user = getState().entities.users[login]
  if (user && requiredFields.every(key => user.hasOwnProperty(key))) return null
  return dispatch(fetchUser(login))
}

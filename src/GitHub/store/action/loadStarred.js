import { CALL_API, Schemas } from '../middleware/api'
import types from '../types'

const fetchStarred = (login, nextPageUrl) => ({
  login,
  [CALL_API]: {
    types: types('STARRED'),
    endpoint: nextPageUrl,
    schema: Schemas.REPO_ARRAY
  }
})

export default (login, nextPage) => (dispatch, getState) => {
  const { nextPageUrl = `users/${login}/starred`, pageCount = 0 } =
    getState().pagination.starredByUser[login] || {}
  if (pageCount > 0 && !nextPage) {
    return null
  }
  return dispatch(fetchStarred(login, nextPageUrl))
}

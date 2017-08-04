import { CALL_API, Schemas } from '../middleware/api'
import types from '../types'

const fetchStargazers = (fullName, nextPageUrl) => ({
  fullName,
  [CALL_API]: {
    types: types('STARGAZERS'),
    endpoint: nextPageUrl,
    schema: Schemas.USER_ARRAY
  }
})

export default (fullName, nextPage) => (dispatch, getState) => {
  const { nextPageUrl = `repos/${fullName}/stargazers`, pageCount = 0 } =
    getState().pagination.stargazersByRepo[fullName] || {}
  if (pageCount > 0 && !nextPage) {
    return null
  }
  return dispatch(fetchStargazers(fullName, nextPageUrl))
}

import { CALL_API, Schemas } from '../middleware/api'
import types from '../types'

const fetchRepo = fullName => ({
  [CALL_API]: {
    types: types('REPO'),
    endpoint: `repos/${fullName}`,
    schema: Schemas.REPO
  }
})

export default (fullName, requiredFields = []) => (dispatch, getState) => {
  const repo = getState().entities.repos[fullName]
  if (repo && requiredFields.every(key => repo.hasOwnProperty(key))) return null
  return dispatch(fetchRepo(fullName))
}

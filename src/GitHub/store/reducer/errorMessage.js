import { RESET_ERROR_MESSAGE } from '../types'

export default (state = null, { type, error }) => {
  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }
  return state
}

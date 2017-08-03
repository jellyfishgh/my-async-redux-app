import {SELECT_REDDIT} from '../types'

export default(state = 'reactjs', {type, reddit}) => {
  switch (type) {
    case SELECT_REDDIT:
      return reddit
    default:
      return state
  }
}

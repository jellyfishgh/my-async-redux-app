import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import entities from './entities'
import pagination from './pagination'
import errorMessage from './errorMessage'

export default combineReducers({
  entities,
  pagination,
  errorMessage,
  router: routerReducer
})

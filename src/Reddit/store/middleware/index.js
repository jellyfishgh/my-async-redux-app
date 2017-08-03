import {applyMiddleware} from 'redux'

import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

const middlewares = process.env.NODE_ENV === 'production'
  ? [thunk]
  : [thunk, createLogger()]

export default applyMiddleware(...middlewares)

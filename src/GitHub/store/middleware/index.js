import {applyMiddleware, compose} from 'redux'

import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {routerMiddleware} from 'react-router-redux'

import DevTools from '../../containers/DevTools'
// import api from './api'

// const middlewares = [thunk, api]
const middlewares = [thunk]
process.env.NODE_ENV !== 'production' && middlewares.push(createLogger())

export default history => compose(applyMiddleware(...[
  ...middlewares,
  routerMiddleware(history)
]), DevTools.instrument())

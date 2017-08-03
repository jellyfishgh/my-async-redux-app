import {createStore} from 'redux'

import reducer from './reducer'
import middleware from './middleware'

export default history => preloadedState => {
  const store = createStore(reducer, preloadedState, middleware(history))
  module.hot && module
    .hot
    .accept('./reducer', () => {
      const nextRootReducer = require('./reducer').default
      store.replaceReducer(nextRootReducer)
    })
  return store
}

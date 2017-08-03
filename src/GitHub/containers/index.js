import React from 'react'
import {Provider} from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import store from '../store'
import App from './App'
import DevTools from './DevTools'

const history = createHistory()

export default() => (
  <Provider store={store(history)()}>
    <div className="root">
      <App history={history}/> {process.env.NODE_ENV !== 'production' && <DevTools/>}
    </div>
  </Provider>
)

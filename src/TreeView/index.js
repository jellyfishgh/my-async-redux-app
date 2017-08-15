import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import uuidv1 from 'uuid/v1'

import generateTree from './generateTree'
import reducer from './reducers'
import Node from './containers/Node'

const rootNodeId = uuidv1()

export default render =>
  render(
    <Provider store={createStore(reducer, generateTree(rootNodeId))}>
      <Node id={rootNodeId} />
    </Provider>,
    document.getElementById('root')
  )

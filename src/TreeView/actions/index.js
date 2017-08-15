import uuidv1 from 'uuid/v1'

import {
  INCREMENT,
  CREATE_NODE,
  DELETE_NODE,
  ADD_CHILD,
  REMOVE_CHILD
} from '../types'

export const increment = nodeId => ({
  type: INCREMENT,
  nodeId
})

export const createNode = () => ({
  type: CREATE_NODE,
  nodeId: uuidv1()
})

export const deleteNode = nodeId => ({
  type: DELETE_NODE,
  nodeId
})

export const addChild = (nodeId, childId) => ({
  type: ADD_CHILD,
  nodeId,
  childId
})

export const removeChild = (nodeId, childId) => ({
  type: REMOVE_CHILD,
  nodeId,
  childId
})

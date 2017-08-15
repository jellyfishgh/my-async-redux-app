import {
  INCREMENT,
  CREATE_NODE,
  DELETE_NODE,
  ADD_CHILD,
  REMOVE_CHILD
} from '../types'

const childIds = (state, { type, childId }) => {
  switch (type) {
    case ADD_CHILD:
      return [...state, childId]
    case REMOVE_CHILD:
      return state.filter(id => id !== childId)
    default:
      return state
  }
}

const node = (state, { type, nodeId, childId }) => {
  switch (type) {
    case CREATE_NODE:
      return { id: nodeId, counter: 0, childIds: [] }
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    case ADD_CHILD:
    case REMOVE_CHILD:
      return {
        ...state,
        childIds: childIds(state.childIds, { type, childId })
      }
    default:
      return state
  }
}

const getAllDescendantIds = (state, nodeId) =>
  state[nodeId].childIds.reduce(
    (acc, childId) => [...acc, childId, ...getAllDescendantIds(state, childId)],
    []
  )

const deleteMany = (state, ids) => {
  state = {
    ...state
  }
  ids.forEach(id => delete state[id])
  return state
}

export default (state = {}, action) => {
  const { type, nodeId } = action
  if (typeof nodeId === 'undefined') return state
  if (type === DELETE_NODE)
    return deleteMany(state, [nodeId, ...getAllDescendantIds(state, nodeId)])
  return {
    ...state,
    [nodeId]: node(state[nodeId], action)
  }
}

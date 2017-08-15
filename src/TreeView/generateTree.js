export default rootNodeId => ({
  [rootNodeId]: {
    id: rootNodeId,
    counter: 0,
    childIds: []
  }
})

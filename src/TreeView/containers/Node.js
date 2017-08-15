import './style.css'

import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Node extends Component {
  handleIncrementClick = () => {
    const { increment, id } = this.props
    increment(id)
  }
  handleAddChildClick = () => {
    const { addChild, createNode, id } = this.props
    addChild(id, createNode().nodeId)
  }
  handleRemoveClick = () => {
    const { removeChild, deleteNode, parentId, id } = this.props
    removeChild(parentId, id)
    deleteNode(id)
  }
  render() {
    const { counter, parentId, childIds, id } = this.props
    const {
      handleIncrementClick,
      handleAddChildClick,
      handleRemoveClick
    } = this
    return (
      <div>
        {id}: {counter}
        <button onClick={handleIncrementClick}>+</button>{' '}
        {typeof parentId !== 'undefined' &&
          <button onClick={handleRemoveClick}>×</button>}
        <ul>
          {childIds.map(childId =>
            <li key={childId}>
              <ConnectedNode id={childId} parentId={id} />
            </li>
          )}
          <li key="add">
            <button onClick={handleAddChildClick}>Add child</button>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, { id }) => state[id]
const ConnectedNode = connect(mapStateToProps, actions)(Node)

export default ConnectedNode

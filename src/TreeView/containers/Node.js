import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Node extends Component {
  handleIncrementClick = () => {
    const { increment, id } = this.props
    increment(id)
  }
  handleAddChildClick = e => {
    e.preventDefault()
    const { addChild, createNode, id } = this.props
    addChild(id, createNode().nodeId)
  }
  handleRemoveClick = e => {
    e.preventDefault()
    const { removeChild, deleteNode, parentId, id } = this.props
    removeChild(parentId, id)
    deleteNode(id)
  }
  render() {
    const { counter, parentId, childIds, id } = this.props
    return (
      <div>
        Counter: {counter}{' '}
        <button onClick={this.handleIncrementClick}>+</button>{' '}
        {typeof parentId !== 'undefined' &&
          <a
            href="#"
            onClick={this.handleRemoveClick} // eslint-disable-line jsx-a11y/href-no-hash
            style={{
              color: 'lightgray',
              textDecoration: 'none'
            }}
          >
            ×
          </a>}
        <ul>
          {childIds &&
            childIds.map(childId =>
              <li key={childId}>
                <ConnectedNode id={childId} parentId={id} />
              </li>
            )}
          <li key="add">
            <a
              href="#" // eslint-disable-line jsx-a11y/href-no-hash
              onClick={this.handleAddChildClick}
            >
              Add child
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, { id }) => state[id]
const ConnectedNode = connect(mapStateToProps, actions)(Node)

export default ConnectedNode

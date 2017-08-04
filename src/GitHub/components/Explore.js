import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ENTER_KEY } from '../config'

export default class Explore extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setInputValue(nextProps.value)
    }
  }
  setInputValue = val => {
    this.refs.input.value = val
  }
  getInputValue = () => {
    return this.refs.input.value
  }
  handleKeyDown = e => {
    e.keyCode === ENTER_KEY && this.handleGoClick()
  }
  handleGoClick = () => {
    const query = this.getInputValue().trim()
    query && this.props.onChange(query)
  }
  render() {
    const { handleGoClick, handleKeyDown } = this
    return (
      <div>
        <p>Type a username or repo full name and hit 'Go':</p>
        <input
          size="45"
          ref="input"
          defaultValue={this.props.value}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleGoClick}>Go!</button>
        <p>Move the DevTools with Ctrl+M or hide them with Ctrl+H.</p>
      </div>
    )
  }
}

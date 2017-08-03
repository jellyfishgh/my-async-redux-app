import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {history} from 'react-router-dom'

import Explore from '../components/Explore'
import {resetErrorMessage} from '../store/action'

class Home extends Component {
  static propTypes = {
    // Injected by React Redux
    errorMessage: PropTypes.string,
    resetErrorMessage: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    // Injected by React Router
    children: PropTypes.node
  }

  handleDismissClick(e) {
    e.preventDefault()
    this
      .props
      .resetErrorMessage()
  }
  handleChange = nextValue => {
    history.push(`/${nextValue}`)
  }
  render() {
    const {children, errorMessage, inputValue} = this.props
    const {handleDismissClick, handleChange} = this
    return (
      <div className="page">
        <Explore value={inputValue} onChange={handleChange}/>
        <hr/> {errorMessage && <p style={{
          backgroundColor: '#e99',
          padding: 10
        }}>
          <b>{errorMessage}</b>
          {' '}
          <button onClick={handleDismissClick}>
            Dismiss
          </button>
        </p>}
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorMessage: state.errorMessage,
  inputValue: ownProps
    .location
    .pathname
    .substring(1)
})

export default connect(mapStateToProps, {resetErrorMessage})(Home)

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Repo extends Component {
  static propTypes = {
    repo: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string
    }).isRequired,
    owner: PropTypes.shape({ login: PropTypes.string.isRequired }).isRequired
  }
  render() {
    const { repo: { name, description }, owner: { login } } = this.props
    return (
      <div>
        <h3>
          <Link to={`/${login}/${name}`}>
            {name}
          </Link>
          {' by '}
          <Link to={`/${login}`}>
            {login}
          </Link>
        </h3>
        {description &&
          <p>
            {description}
          </p>}
      </div>
    )
  }
}

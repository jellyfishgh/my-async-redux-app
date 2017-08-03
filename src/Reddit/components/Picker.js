import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Picker extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes
      .arrayOf(PropTypes.string.isRequired)
      .isRequired
  }
  render() {
    const {value, options, onChange} = this.props
    return (
      <div>
        <h1>{value}</h1>
        <select onChange={({target}) => onChange(target.value)}>
          {options.map(option => <option value={option} key={option}>{option}</option>)}
        </select>
      </div>
    )
  }
}

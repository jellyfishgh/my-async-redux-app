import React, { Component } from 'react'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'
import Home from './Home'

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Route path="/" component={Home} />
      </ConnectedRouter>
    )
  }
}

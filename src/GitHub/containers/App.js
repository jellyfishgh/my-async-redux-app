import React, {Component} from 'react'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router-dom'

import Home from './Home'
import routes from '../routes'

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className="app">
          <Route path='/' component={Home}>
            {routes.map(route => <Route key={route.path} {...route}/>)}
          </Route>
        </div>
      </ConnectedRouter>
    )
  }
}

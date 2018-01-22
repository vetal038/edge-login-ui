import React, { Component } from 'react'
import { IndexRedirect, Route, Router, hashHistory } from 'react-router'

import Container from './modules/Container.web'
import Home from './modules/Home/Home.web'
import Login from './modules/Login/Login.web'
import ReviewDetails from './modules/ReviewDetails/ReviewDetails.web'
import Signup from './modules/Signup/SignupContainer.web'

export default class RouterComponent extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRedirect to='/login' />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/review' component={ReviewDetails} />
          <Route path='/home' component={Home} />
        </Route>
      </Router>
    )
  }
}

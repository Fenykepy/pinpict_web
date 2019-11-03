import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'

import { appSelector } from 'app/selectors'

import Header from 'app/components/header/Header'
import Login from 'user/components/login/Login'
import Register from 'user/components/register/Register'
import Pinpict from 'pinpict/components/pinpict/Pinpict'

import styles from './app.module.css'

class App extends Component {

    render() {
      console.log('App', this.props)

      return (
        <section
          role="main"
          className={styles.main}
        >
          <Header 
            username={this.props.username}
            dispatch={this.props.dispatch}
          />

          <Switch>
            <Route path="/login">
               <Login
                userslug={this.props.userslug}
                is_logging_in={false}
                dispatch={this.props.dispatch}
                login_errors={this.props.login_errors}
               />
            </Route>
            <Route path="/signup">
              <Register
                userslug={this.props.userslug}
              />
            </Route>
            <Route path="/">
              <Pinpict />
            </Route>
          </Switch>
        </section>
      )
    }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  is_logging_in: PropTypes.bool,
  login_errors: PropTypes.object,
  username: PropTypes.string,
  userslug: PropTypes.string,
}

// Wrap the component to inject dispatch and state into it
export default withRouter(connect(appSelector)(App))

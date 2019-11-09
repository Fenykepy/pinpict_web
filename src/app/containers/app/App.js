import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'

import { appSelector } from 'app/selectors'

import AppContextProvider from 'app/components/appContextProvider/AppContextProvider'
import Spinner from 'app/components/spinner/Spinner'
import Header from 'app/components/header/Header'
import Login from 'user/components/login/Login'
import Register from 'user/components/register/Register'
import Pinpict from 'pinpict/components/pinpict/Pinpict'

import styles from './app.module.css'

class App extends Component {

    render() {
      console.log('App', this.props)

      if (! this.props.authenticated_slug && (this.props.is_logging_in ||
          this.props.is_refreshing)) {
            return (
              <section>
                <Spinner message="Authenticating..." />
              </section>
            )
      }

      return (
        <section
          role="main"
          className={styles.main}
        >
          <AppContextProvider
            value={{
              authenticated_slug: this.props.authenticated_slug
            }}
          >  
            <Header 
              username={this.props.username}
              dispatch={this.props.dispatch}
            />

            <Switch>
              <Route path="/login">
                 <Login
                  is_logging_in={false}
                  dispatch={this.props.dispatch}
                  login_errors={this.props.login_errors}
                 />
              </Route>
              <Route path="/signup">
                <Register />
              </Route>
              <Route path="/">
                <Pinpict />
              </Route>
            </Switch>
          </AppContextProvider>
        </section>
      )
    }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  is_logging_in: PropTypes.bool,
  login_errors: PropTypes.object,
  username: PropTypes.string,
  authenticated_slug: PropTypes.string,
}

// Wrap the component to inject dispatch and state into it
export default withRouter(connect(appSelector)(App))

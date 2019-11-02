import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { appSelector } from 'app/selectors'

import Header from 'app/components/header/Header'
import Login from 'user/components/login/Login'
import Librairy from 'librairy/containers/librairy/Librairy'

import styles from './app.module.css'

class App extends Component {


    // if user is authenticated, we show main page
    // else we show login form


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
                  is_logging_in={false}
                  dispatch={this.props.dispatch}
                  login_errors={this.props.login_errors}
                 />
              </Route>
              <Route path="/">
                <Librairy />
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
}

// Wrap the component to inject dispatch and state into it
export default connect(appSelector)(App)

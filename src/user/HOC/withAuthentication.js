import React, { Component } from 'react'

import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'

import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

function withAuthentication(WrappedComponent) {

  return class extends Component {
    
    static contextType = AppContext
    
    render() {

      console.log('withAuthentication', this.props)

      if (! this.context.authenticatedslug) {
        // User isn't authenticated, redirect to login page
        return (
          <Redirect
            to={{
              pathname: "/login/",
              state: { from: this.props.location }
            }}
          />
        )
      }

      return (
        <WrappedComponent
          {...this.props}
        />
      )
    }
  }
}

export default compose(
  withRouter,
  withAuthentication
)


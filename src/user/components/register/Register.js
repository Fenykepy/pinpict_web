import React, { Component } from 'react'

import { Link, Redirect } from 'react-router-dom'

import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

import FormWrapper from 'forms/components/formWrapper/FormWrapper'

export default class Register extends Component {

  static contextType = AppContext
  
  render() {

    if (this.context.authenticated_slug) {
      // Redirect if user is loggued in
      return (<Redirect to={`/${this.context.authenticated_slug}/`} />)
    }

    return (
      <FormWrapper>
        <h1>Join Pinpict</h1>
          <p><em>Signing up into Pinpict has been disabled for moment.<br /> Contact webmaster if you really need an account.</em></p>
        <footer>
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </footer>
      </FormWrapper>
    )
  }
}



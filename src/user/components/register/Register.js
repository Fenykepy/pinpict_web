import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link, Redirect } from 'react-router-dom'

import FormWrapper from 'forms/components/formWrapper/FormWrapper'

export default class Register extends Component {

  render() {

    if (this.props.userslug) {
      // Redirect if user is loggued in
      return (<Redirect to={`/${this.props.userslug}/`} />)
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

Register.propTypes = {
  userslug: PropTypes.string,
}


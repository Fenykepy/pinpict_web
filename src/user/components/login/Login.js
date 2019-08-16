import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { login } from 'user/actions'

import FormWrapper from 'forms/components/formWrapper/FormWrapper'
import FieldWrapper from 'forms/components/fieldWrapper/FieldWrapper'
import LoginForm from 'user/components/loginForm/LoginForm'
import Submit from 'forms/components/submit/Submit'
import Spinner from 'app/components/spinner/Spinner'

const LOGIN_FORM = "login-form"

export default class Login extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleEmailChange(e) {
    this.setState({email: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleLogin(e) {
    e.preventDefault()
    this.props.dispatch(login(this.state))
  }

  render() {
    console.log('Login', this.props)
    
    let child
    // Show spinner if user is logging in
    if (this.props.is_logging_in) {
      child = (<Spinner message="Logging in..." />)
    } else {
    // Show login form
      child = (
        <FormWrapper>
          <h1>Log into PhotoBook</h1>
          <LoginForm
            id={LOGIN_FORM}
            onSubmit={this.handleLogin.bind(this)}
            handleEmailChange={this.handleEmailChange.bind(this)}
            handlePasswordChange={this.handlePasswordChange.bind(this)}
            email={this.state.email}
            password={this.state.password}
            login_errors={this.props.login_errors}
          />
          <footer>
            <FieldWrapper>
              <Submit
                primary={true}
                form={LOGIN_FORM}
                value="Log in"
              />
            </FieldWrapper>
          </footer>
        </FormWrapper>
      )
    }


    return (
      <section role="main">
        {child}
      </section>
    )
  }
  
}


Login.propTypes = {
  is_logging_in: PropTypes.bool.isRequired,  
  login_errors: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
}



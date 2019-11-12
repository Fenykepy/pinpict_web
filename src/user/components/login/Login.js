import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withRouter, Redirect, Link } from 'react-router-dom'

import { login } from 'user/actions'

import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

import FormWrapper from 'forms/components/formWrapper/FormWrapper'
import FieldWrapper from 'forms/components/fieldWrapper/FieldWrapper'
import LoginForm from 'user/components/loginForm/LoginForm'
import Submit from 'forms/components/submit/Submit'
import Spinner from 'app/components/spinner/Spinner'

const LOGIN_FORM = "login-form"

class Login extends Component {
  
  static contextType = AppContext

  
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value})
  }

  handleLogin(e) {
    e.preventDefault()
    this.props.dispatch(login(this.state))
  }

  render() {
    console.log('Login', this.props, this.context)
    
    if (this.context.authenticatedslug) {
      // Redirect if user is loggued in
      let { from } = this.props.location.state || { from: { pathname: `/${this.context.authenticatedslug}/`}}

      return (<Redirect to={from} />)
    }


    // Show spinner if user is logging in
    if (this.props.is_logging_in) {
      return (<Spinner message="Logging in..." />)
    }
    

    // Show login form
    return (
      <FormWrapper>
        <h1>Log into PinPict</h1>
        <LoginForm
          id={LOGIN_FORM}
          onSubmit={this.handleLogin.bind(this)}
          handleUsernameChange={this.handleUsernameChange.bind(this)}
          handlePasswordChange={this.handlePasswordChange.bind(this)}
          username={this.state.username}
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
          <p>No account yet? <Link to="/signup">Sign up</Link></p>
        </footer>
      </FormWrapper>
    )


  }
  
}

export default withRouter(Login)

Login.propTypes = {
  is_logging_in: PropTypes.bool.isRequired,  
  login_errors: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  userslug: PropTypes.string,
}



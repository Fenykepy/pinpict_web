import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormRequiredField from 'forms/components/formRequiredField/FormRequiredField'
import FieldWrapper from 'forms/components/fieldWrapper/FieldWrapper'
import FormFieldErrors from 'forms/components/formFieldErrors/FormFieldErrors'


export default class LoginForm extends Component {
  
  render() {
    console.log('LoginForm', this.props)
    return (
      <form
        id={this.props.id}
        onSubmit={this.props.onSubmit}
      >
        <FieldWrapper>
          <FormFieldErrors
            errors_list={this.props.login_errors}
            field={'detail'}
          />
        </FieldWrapper>
        <FieldWrapper>
          <label htmlFor="id-username">Username:<FormRequiredField /></label>
          <FormFieldErrors
            errors_list={this.props.login_errors}
            field={'username'}
          />
          <input
            id="id-username"
            name="username"
            type="text"
            value={this.props.username}
            onChange={this.props.handleUsernameChange.bind(this)}
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <label htmlFor="id-password">Password:<FormRequiredField /></label>
          <FormFieldErrors
            errors_list={this.props.login_errors}
            field={'password'}
          />
          <input
            id="id-password"
            name="password"
            type="password"
            value={this.props.password}
            onChange={this.props.handlePasswordChange.bind(this)}
            required
          />
        </FieldWrapper>
      </form>
    )
  }
}


LoginForm.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string,
  password: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
}

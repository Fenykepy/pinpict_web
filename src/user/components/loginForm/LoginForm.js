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
            errors_list={this.props.errors}
            field={'non_field_errors'}
          />
        </FieldWrapper>
        <FieldWrapper>
          <label htmlFor="id-email">Email:<FormRequiredField /></label>
          <FormFieldErrors
            errors_list={this.props.errors}
            field={'email'}
          />
          <input
            id="id-email"
            name="email"
            type="text"
            value={this.props.email}
            onChange={this.props.handleEmailChange.bind(this)}
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <label htmlFor="id-password">Password:<FormRequiredField /></label>
          <FormFieldErrors
            errors_list={this.props.errors}
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
  email: PropTypes.string,
  password: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
}

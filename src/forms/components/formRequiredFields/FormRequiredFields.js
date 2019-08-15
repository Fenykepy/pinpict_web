import React, { Component } from 'react'

import FormRequiredField from 'forms/components/formRequiredField/FormRequiredField'
import FieldWrapper from 'forms/components/fieldWrapper/FieldWrapper'

export default class FormRequiredFields extends Component {
  
  render() {
    return (
      <FieldWrapper>
        <FormRequiredField /> : required fields.
      </FieldWrapper>
    )
  }
}

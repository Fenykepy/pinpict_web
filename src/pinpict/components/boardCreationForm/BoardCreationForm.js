import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormRequiredField from 'forms/components/formRequiredField/FormRequiredField'
import FieldWrapper from 'forms/components/fieldWrapper/FieldWrapper'
import FormFieldErrors from 'forms/components/formFieldErrors/FormFieldErrors'

export default class BoardCreationForm extends Component {

  render() {

    return (
      <form
        id={this.props.id}
        onSubmit={this.props.onSubmit}
      >
        <FieldWrapper>
          <FormFieldErrors
            errors_list={this.props.errors}
            field={'detail'}
          />
        </FieldWrapper>
        <FieldWrapper>
          <label htmlFor="id-title">Title:<FormRequiredField /></label>
          <FormFieldErrors
            errors_list={this.props.errors}
            field={'title'}
          />
          <input
            id="id-title"
            name="title"
            type="text"
            value={this.props.title}
            onChange={this.props.handleTitleChange.bind(this)}
            placeholder="Board's title (required)"
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <label htmlFor="id-description">Description:</label>
          <FormFieldErrors
            errors_list={this.props.errors}
            field={'description'}
          />
          <textarea
            id="id-description"
            name="description"
            rows="5"
            value={this.props.description}
            onChange={this.props.handleDescriptionChange.bind(this)}
            placeholder="Few words about this board (optional)"
          />
        </FieldWrapper>
      </form>
    )
  }
}

BoardCreationForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
}


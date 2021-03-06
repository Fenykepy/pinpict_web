import React, { Component } from 'react'
import PropTypes from 'prop-types'

import FormRequiredField from 'forms/components/formRequiredField/FormRequiredField'
import FieldWrapper from 'forms/components/fieldWrapper/FieldWrapper'
import FormFieldErrors from 'forms/components/formFieldErrors/FormFieldErrors'
import ImageFileInput from 'forms/components/imageFileInput/ImageFileInput'

export default class UploadPinForm extends Component {

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
          <label htmlFor="id-board">Board:<FormRequiredField /></label>
          <FormFieldErrors
            errors_list={this.props.errors}
            field={'board'}
          />
          {/* TODO Create a separate Select component wrapped to style arrow down */}
          <select
            id="id-board"
            name="board"
            value={this.props.board || this.props.default_board}
            onChange={this.props.handleBoardChange.bind(this)}
            required
          >
              {this.props.boards.map(board =>
                <option
                  key={board.slug}
                  value={board.slug}
                >{board.title}</option>
              )}
          </select>
        </FieldWrapper>
        <FieldWrapper>
          <label htmlFor="id-description">Description:<FormRequiredField /></label>
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
            placeholder="Few words about this pin (required)"
            required
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormFieldErrors
            errors_list={this.props.errors}
            field={'source_file'}
          />
          <ImageFileInput
            id="id-source_file"
            handleFileChange={this.props.handleFileChange.bind(this)}
            message="Add pin file"
            title="Choose file to upload"
            removeTitle="Remove this file"
            className={this.props.fileClassName}
            file={this.props.file}
          />
        </FieldWrapper>
      </form>
    )
  }
}


UploadPinForm.propTypes = {
  id: PropTypes.string.isRequired,
  board: PropTypes.string,
  boards: PropTypes.array,
  description: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  handleBoardChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  fileClassName: PropTypes.string,
}



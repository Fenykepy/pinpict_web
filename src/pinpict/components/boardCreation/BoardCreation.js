import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { createBoard } from 'pinpict/actions'

import withModal from 'modal/HOC/withModal'

import FormWrapper from 'forms/components/formWrapper/FormWrapper'
import FieldWrapper from 'forms/components/fieldWrapper/FieldWrapper'
import BoardCreationForm from 'pinpict/components/boardCreationForm/BoardCreationForm'
import CancelButton from 'forms/components/cancelButton/CancelButton'
import Submit from 'forms/components/submit/Submit'
import Spinner from 'app/components/spinner/Spinner'

const BOARD_CREATION_FORM = "board-creation-form"

class BoardCreation extends Component {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
    }
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value})
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }

  handleCreateBoard(e) {
    e.preventDefault()
    this.props.dispatch(createBoard({...this.state, private: this.props.is_private}))
  }

  render() {
    console.log('BoardCreation', this.props)


    // Show spinner if board is creating
    if (this.props.is_creating) {
      return (<Spinner message="Saving..." />)
    }
    

    
    return (
      <FormWrapper>
        <header>
          <CancelButton
            onClick={this.props.closeModal}
            title="Cancel"
          />
          <h1>{this.props.is_private ? "Create a private board" : "Create a board"}</h1>
        </header>
        <BoardCreationForm
          id={BOARD_CREATION_FORM}
          onSubmit={this.handleCreateBoard.bind(this)}
          handleTitleChange={this.handleTitleChange.bind(this)}
          handleDescriptionChange={this.handleDescriptionChange.bind(this)}
          title={this.state.title}
          description={this.state.description}
          errors={this.props.errors}
        />
        <footer>
          <FieldWrapper>
            <Submit
              primary={true}
              form={BOARD_CREATION_FORM}
              value="Create"
            />
          </FieldWrapper>
        </footer>
      </FormWrapper>
    )
  }
}

BoardCreation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  is_creating: PropTypes.bool,
  errors: PropTypes.object,
}

// wrap component in modal
export default withModal(BoardCreation)

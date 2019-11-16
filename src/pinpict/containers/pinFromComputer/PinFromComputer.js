import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { uploadPinSelector } from 'pinpict/selectors'

import { fetchCurrentUserBoardsIfNeeded } from 'user/actions'
import { uploadPin } from 'pinpict/actions'

import Spinner from 'app/components/spinner/Spinner'
import UploadPinForm from 'pinpict/components/uploadPinForm/UploadPinForm'
import FieldWrapper from 'forms/components/fieldWrapper/FieldWrapper'
import Submit from 'forms/components/submit/Submit'

import styles from './pinFromComputer.module.css'

const PIN_FROM_COMPUTER = "PIN_FROM_COMPUTER"

class PinFromComputer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      board: '',
      description: '',
      source_file: null,
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchCurrentUserBoardsIfNeeded())
  }
  
  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }

  handleBoardChange(e) {
    this.setState({board: e.target.value})
  }

  handleFileChange(file) {
    this.setState({source_file: file})
  }

  handleSubmit(e) {
    e.preventDefault()
    // set default board if necessary
    let board = this.state.board || this.props.default_board
    console.log('submit form', {...this.state, board})
    this.props.dispatch(uploadPin({...this.state, board}))
  }


    
  render() {
    console.log('PinFromComputer', this.props)

    if (this.props.boards.is_fetching) {
      return (
        <article
          className={styles.pinForm}
        >
          <Spinner />
        </article>
      )
    }

    if (this.props.create_pin.is_uploading) {
      return (
        <article
          className={styles.pinForm}
        >
          <Spinner
            message="Uploading pin..."
          />
        </article>
      )
    }

    if (this.props.boards.length === 0) {
      return (
        <article
          className={styles.pinForm}
        >
          <p>You need to create a board before adding pins.</p>
        </article>
      )
    }


    return(
      <article
        className={styles.pinForm}
      >
        <div
          className={styles.leftForm}
        >
          <h1>Upload a pin</h1>
          <UploadPinForm
            id={PIN_FROM_COMPUTER}
            onSubmit={this.handleSubmit.bind(this)}
            handleDescriptionChange={this.handleDescriptionChange.bind(this)}
            handleBoardChange={this.handleBoardChange.bind(this)}
            handleFileChange={this.handleFileChange.bind(this)}
            file={this.state.source_file}
            fileClassName={styles.image}
            board={this.state.board}
            default_board={this.props.default_board}
            boards={this.props.boards.boards}
            description={this.state.description}
            errors={this.props.create_pin.errors}
          />
          <footer> 
            <FieldWrapper>
              <Submit
                primary={true}
                form={PIN_FROM_COMPUTER}
                value="Pin it"
              />
            </FieldWrapper>
          </footer>
        </div>
      </article>
    )
  }
}

PinFromComputer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  boards: PropTypes.shape({
    boards: PropTypes.array.isRequired,
    is_fetching: PropTypes.bool,
    fetched: PropTypes.bool,
  }),
  default_board: PropTypes.string,
}


export default withRouter(connect(uploadPinSelector)(PinFromComputer))

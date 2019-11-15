import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { uploadPinSelector } from 'pinpict/selectors'

import { fetchCurrentUserBoardsIfNeeded } from 'user/actions'
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
    console.log('submit form', this.state)
    //this.props.dispatch(uploadPin(this.state))
  }
    
  render() {

    console.log('PinFromComputer', this.props)
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
            boards={this.props.boards.boards}
            description={this.state.description}
            errors={this.props.errors}
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
  })
}


export default withRouter(connect(uploadPinSelector)(PinFromComputer))

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { modalSelector } from 'modal/selectors'

import { closeModal } from 'modal/actions'

import styles from './modal.module.css'


class Modal extends Component {

  closeModal(e) {
    e.stopPropagation()
    this.props.dispatch(closeModal())
  }

  render() {

    console.log('Modal', this.props)
  
    if ( ! this.props.modal || this.props.modal !== this.props.id) {
      return null
    }

    return (
      <div
        className={styles.overlay}
        onClick={this.closeModal.bind(this)}
      >{this.props.children}</div>
    )
  }
}


Modal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.string.isRequired,
}


// Wrap the component to inject dispatch and state into it
export default connect(modalSelector)(Modal)


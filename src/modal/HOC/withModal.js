import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { compose } from 'redux'
import { connect } from 'react-redux'

import { modalSelector } from 'modal/selectors'
import { closeModal } from 'modal/actions'

import styles from './modal.module.css'


function withModal(WrappedComponent) {

  return class extends Component {

    closeIfClosable(e) {
      if (this.props.closable) {
        return this.closeModal(e)
      }
      e.stopPropagation()
    }

    closeModal(e) {
      e.stopPropagation()
      this.props.dispatch(closeModal())
    }

    render() {

      console.log('withModal', this.props)
  
      if ( ! this.props.modal || this.props.modal !== this.props.id) {
        return null
      }

      return (
        <div
          className={styles.overlay}
          onClick={this.closeIfClosable.bind(this)}
        >
          <WrappedComponent
            closeModal={this.closeModal}
            {...this.props}
          />
        </div>
      )
    }
  }
}

withModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.string.isRequired,
  closable: PropTypes.bool,
}

  
// Wrap the component to inject dispatch and state into it
export default compose(
  connect(modalSelector),
  withModal
)


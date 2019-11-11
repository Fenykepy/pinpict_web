import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './cancelButton.module.css'

export default class CancelButton extends Component {

  render() {
    return (
      <button
        className={styles.cancel}
        title={this.props.title || null}
        onClick={this.props.onClick}
      >×</button>
    )
  }
}


CancelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
}

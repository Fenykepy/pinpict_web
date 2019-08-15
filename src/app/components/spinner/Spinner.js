import React, { Component } from 'react'
import PropTypes from 'prop-types'

import spinner from './spinner.svg'
import styles from './spinner.module.css'

export default class Spinner extends Component {
  render() {
    
    return (
      <div className={styles.spinner}>
        <img src={spinner} alt="spinner" height="40px" />
        <p><em>{this.props.message}</em></p>
      </div>
    )
  }
}

Spinner.propTypes = {
  message: PropTypes.string,
}


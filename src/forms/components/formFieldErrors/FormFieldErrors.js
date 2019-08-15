import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './formFieldErrors.module.css'

export default class FormFieldErrors extends Component {
  
  render() {
    if (this.props.errors_list && this.props.errors_list[this.props.field]) {
      let errors = this.props.errors_list[this.props.field]
      return (
        <ul
          className={styles.errorsList}
        >
          {errors.map(error =>
            <li
              key={error}
            >{error}</li>
          )}
        </ul>
      )
    }
    return null
  }
}

FormFieldErrors.propTypes = {
  field: PropTypes.string.isRequired,
  errors_list: PropTypes.array,
}

import React, { Component, PropTypes } from 'react'
import { styles } from './formRequiredField'

export default class FormRequiredField extends Component {

  render() {
    return (
      <p
        className={styles.required_field}
      ><span className={styles.red}>*</span> : required field.</p>
    )
  }
}

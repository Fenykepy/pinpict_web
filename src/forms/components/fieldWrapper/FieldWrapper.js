import React, { Component } from 'react'

import styles from './fieldWrapper.module.css'

export default class FieldWrapper extends Component {

  render() {
    return (
      <div
        className={styles.fieldWrapper}
      >
        {this.props.children}
      </div>
    )
  }
}

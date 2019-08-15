import React, { Component } from 'react'

import styles from './formWrapper.module.css'

export default class FormWrapper extends Component {

  render() {

    return (
      <article
        className={styles.formWrapper}
      >
        {this.props.children}
      </article>
    )
  }
}

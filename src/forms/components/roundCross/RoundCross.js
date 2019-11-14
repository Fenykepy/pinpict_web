import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './roundCross.module.css'

export default class RoundCross extends Component {

  render() {
    return (
      <div
        className={styles.titleCross}
      >
          <div className={styles.roundCross} />
          <h3>{this.props.title}</h3>
      </div>
    )
  }
}


RoundCross.propTypes = {
  title: PropTypes.string,
}

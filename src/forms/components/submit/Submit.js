import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './submit.module.css'

export default class Submit extends Component {
  
  getClassNames() {
    let classes = []

    // we add extra classes
    classes.push(styles.button)
    if (this.props.primary) { classes.push(styles.primary)}
    if (this.props.className) { classes.push(this.props.className)}

    return classes.join(" ")
  }

  render() {
    return (
      <input
        className={this.getClassNames()}
        type="submit"
        value={this.props.value}
        form={this.props.form}
      />
    )
  }
}

Submit.propTypes = {
  value: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  primary: PropTypes.bool,
}

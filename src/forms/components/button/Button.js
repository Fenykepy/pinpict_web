import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../submit/submit.module.css'

export default class Button extends Component {
  
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
      <button
        className={this.getClassNames()}
        value={this.props.value || ""}
        title={this.props.title || null}
        type={this.props.type || "button"}
      >{this.props.children}</button>
    )
  }
}

Button.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  primary: PropTypes.bool,
}

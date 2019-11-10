import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styles from '../submit/submit.module.css'

export default class ButtonRouterLink extends Component {
  
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
      <Link
        to={this.props.to}
        title={this.props.title || null}
        className={this.getClassNames()}
      >{this.props.children}</Link>
    )
  }
}

ButtonRouterLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
}

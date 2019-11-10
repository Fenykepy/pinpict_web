import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from '../submit/submit.module.css'

export default class ButtonLink extends Component {
  
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
      <a
        href={this.props.href}
        title={this.props.title || null}
        target={this.props.target || null}
        rel={this.props.rel || null}
        className={this.getClassNames()}
      >{this.props.children}</a>
    )
  }
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  className: PropTypes.string,
  primary: PropTypes.bool,
}

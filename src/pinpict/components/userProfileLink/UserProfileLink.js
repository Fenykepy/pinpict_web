import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styles from './userProfileLink.module.css'

export default class UserProfileLink extends Component {

  render() {
    if (this.props.selected_slug === this.props.userslug) {
      return (
        <Link
          to="/profile/"
          className={styles.link}
        >Edit profile</Link>
      )
    }
    return null
  }
}


UserProfileLink.propTypes = {
  selected_slug: PropTypes.string,
  userslug: PropTypes.string,
}


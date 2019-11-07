import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ButtonLink from 'forms/components/buttonLink/ButtonLink'

import styles from './userProfileLink.module.css'

export default class UserProfileLink extends Component {

  render() {
    if (this.props.selected_slug === this.props.userslug) {
      return (
        <ButtonLink
          to="/profile/"
          className={styles.link}
          title="Edit profile"
          primary={true}
        >Edit profile</ButtonLink>
      )
    }
    return null
  }
}


UserProfileLink.propTypes = {
  selected_slug: PropTypes.string,
  userslug: PropTypes.string,
}


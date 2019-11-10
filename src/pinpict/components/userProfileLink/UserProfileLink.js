import React, { Component } from 'react'
import PropTypes from 'prop-types'


import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

import ButtonLink from 'forms/components/buttonLink/ButtonLink'

import styles from './userProfileLink.module.css'

export default class UserProfileLink extends Component {

  static contextType = AppContext

  
  render() {
    
    console.log('UserProfileLink', this.props, this.context)
    
    if (this.props.selected_userslug === this.context.authenticatedslug) {
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
  selected_userslug: PropTypes.string,
}


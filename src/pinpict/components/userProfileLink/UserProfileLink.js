import React, { Component } from 'react'
import PropTypes from 'prop-types'


import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

import ButtonRouterLink from 'forms/components/buttonRouterLink/ButtonRouterLink'

import styles from './userProfileLink.module.css'

export default class UserProfileLink extends Component {

  static contextType = AppContext

  
  render() {
    
    console.log('UserProfileLink', this.props, this.context)
    
    if (this.props.userslug === this.context.authenticatedslug) {
      return (
        <ButtonRouterLink
          to="/profile/"
          className={styles.link}
          title="Edit profile"
          primary={true}
        >Edit profile</ButtonRouterLink>
      )
    }
    return null
  }
}


UserProfileLink.propTypes = {
  userslug: PropTypes.string,
}


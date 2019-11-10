import React, { Component } from 'react'
import PropTypes from 'prop-types'

import settings from 'pinpict_config'
import styles from './userDetail.module.css'

import UserWebsite from 'pinpict/components/userWebsite/UserWebsite'
import UserSocialsLinks from 'pinpict/components/userSocialsLinks/UserSocialsLinks'
import UserNav from 'pinpict/components/userNav/UserNav'
import UserProfileLink from 'pinpict/components/userProfileLink/UserProfileLink'

const BASE_URL = settings.base_url

export default class UserDetail extends Component {
  
  render() {

    console.log('UserDetail', this.props)
    
    return (
      <article
        className={styles.user_detail}
      >
          <img
            src={BASE_URL + 'media/' + this.props.user.avatar}
            alt={`${this.props.user.username}'s avatar`}
          />
          <h1>{this.props.user.username}</h1>
          <hr />
          {/* TODO profile link if owner, follow / unfollow user if authenticated */}
          <UserProfileLink
            userslug={this.props.user.slug}
          />
          <UserWebsite
            website={this.props.user.website}
          />
          <UserSocialsLinks
            user={this.props.user}
          />
          <UserNav
            userslug={this.props.user.slug}
            n_public_boards={this.props.user.n_public_boards}
            n_public_pins={this.props.user.n_public_pins}
            n_followers={this.props.user.n_followers}
            n_following={this.props.user.n_following}
          />
      </article>
    )
  }
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired,
}




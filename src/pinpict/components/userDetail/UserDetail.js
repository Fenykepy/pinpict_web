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
    return(
      <article
        className={styles.user_detail}
      >
          <img
            src={BASE_URL + 'media/' + this.props.selected_user.avatar}
            alt={`${this.props.selected_user.username}'s avatar`}
          />
          <h1>{this.props.selected_user.username}</h1>
          <hr />

          <UserProfileLink
            userslug={this.props.userslug}
            selected_slug={this.props.selected_user.slug}
          />
          <UserWebsite
            website={this.props.selected_user.website}
          />
          <UserSocialsLinks
            user={this.props.selected_user}
          />
          <UserNav
            userslug={this.props.selected_user.slug}
            n_public_boards={this.props.selected_user.n_public_boards}
            n_public_pins={this.props.selected_user.n_public_pins}
            n_followers={this.props.selected_user.n_followers}
            n_following={this.props.selected_user.n_following}
          />
      </article>
    )
  }
}

UserDetail.propTypes = {
  userslug: PropTypes.string,
  selected_user: PropTypes.object,
}




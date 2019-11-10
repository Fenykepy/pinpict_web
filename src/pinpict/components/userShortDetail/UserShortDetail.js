import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import settings from 'pinpict_config'
import styles from './userShortDetail.module.css'

import UserWebsite from 'pinpict/components/userWebsite/UserWebsite'

const BASE_URL = settings.base_url

export default class UserShortDetail extends Component {
  
  render() {

    console.log('UserShortDetail', this.props)
    
    return (
      <article
        className={styles.user_short_detail}
      >
          <img
            src={BASE_URL + 'media/' + this.props.user.avatar}
            alt={`${this.props.user.username}'s avatar`}
          />
              <h2><Link
                to={`/${this.props.user.slug}/`}
              >{this.props.user.username}</Link></h2>
          <UserWebsite
            website={this.props.user.website}
          />
          {/* TODO follow / unfollow board button if authenticated, edit button if owner */}
      </article>
    )
  }
}

UserShortDetail.propTypes = {
  user: PropTypes.object.isRequired,
}




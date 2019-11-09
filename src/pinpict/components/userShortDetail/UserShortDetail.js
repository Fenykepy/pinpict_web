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
            src={BASE_URL + 'media/' + this.props.selected_user.avatar}
            alt={`${this.props.selected_user.username}'s avatar`}
          />
              <h2><Link
                to={`/${this.props.selected_user.slug}/`}
              >{this.props.selected_user.username}</Link></h2>
          <UserWebsite
            website={this.props.selected_user.website}
          />
      </article>
    )
  }
}

UserShortDetail.propTypes = {
  selected_user: PropTypes.object.isRequired,
}




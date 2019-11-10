import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import { Link } from 'react-router-dom'

import settings from 'pinpict_config'

import styles from './userAdded.module.css'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const BASE_URL = settings.base_url


export default class UserAdded extends Component {
  
  getDate() {
    if (this.props.date) {
      let date = new Date(this.props.date)
      return (<span
        className={styles.date}> • {timeAgo.format(date)}</span>)
    }
    return null
  }
  render() {

    if (! this.props.user.fetched) { return null }

    return (
      <article
        className={styles.added}
      >
        <Link
          to={`/${this.props.user.slug}/`}
        >
          <img
            src={BASE_URL + 'media/' + this.props.user.avatar}
            alt={`${this.props.user.username}'s avatar`}
          />
        </Link>
          <p>
            <Link
              to={`/${this.props.user.slug}/`}
            >
              <span
                className={styles.message}
              >{this.props.message}</span><br />
                  <strong>{this.props.user.username}</strong>
                  {this.getDate()}
            </Link>
          </p>
      </article>
    )
  }
}


UserAdded.propTypes = {
  message: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  date: PropTypes.string
}

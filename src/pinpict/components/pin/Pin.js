import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import settings from 'pinpict_config'

import { getPicturePath } from 'helpers/utils'

import styles from './pin.module.css'

import Spinner from 'app/components/spinner/Spinner'

const BASE_URL = settings.base_url



export default class Pin extends Component {

  render() {
    //console.log('Pin', this.props)

    if (this.props.is_fetching) {
      return (
        <article
          className={styles.pin}
        ><Spinner /></article>
      )
    }

    return (
      <article
        className={styles.pin}
      >
        <div
          className={styles.button_wrapper}
        >
          {/* TODO like if authenticated, edit if owner */}
          {/* TODO pinit if authenticated */}
          <Link
            to={'/pin/' + this.props.id + "/"}
          >
            <img
              src={BASE_URL + 'media/previews/236/' + getPicturePath(this.props.sha1)}
              alt="Pin"
            />
          </Link>
        </div>
          {/* TODO rate if owner */}
        <p
          className={styles.description}
        >{this.props.description}</p>
        <footer>
          {/* TODO pinned from if source, uploaded to no source, user if search page or last pins page  */}
        </footer>
      </article>

    )
  }
}

Pin.propTypes = {
  description: PropTypes.string,
  owner_rate: PropTypes.number,
  match: PropTypes.object.isRequired,
  sha1: PropTypes.string,
}

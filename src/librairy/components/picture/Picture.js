import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './picture.module.css'

import settings from 'pinpict_config'

const BASE_URL = settings.base_url


export default class Picture extends Component {
  
  openDetail(e) {
    e.preventDefault()
    this.props.selectPicture(this.props.pict.sha1)
  }

  render() {
    console.log('Picture', this.props)

    return (
      <article
        className={styles.picture}
      >
        <a 
          href="/"
          onClick={this.openDetail.bind(this)}
        >
          <img
            src={BASE_URL + 'media/pictures/full/' + this.props.pict.path}
            alt={this.props.pict.description}
          />
        </a>
        <p
          className={styles.description}
        >{this.props.pict.description}</p>
      </article>
    )
  }
}

Picture.propTypes = {
  pict: PropTypes.shape({
    sha1: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  selectPicture: PropTypes.func.isRequired,
}

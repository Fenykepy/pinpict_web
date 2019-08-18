import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './picture.module.css'

import settings from 'photobook_config'

const BASE_URL = settings.base_url


export default class Picture extends Component {
  
  render() {
    console.log('Picture', this.props)

    return (
      <article
        className={styles.picture}
      >
        <a href="">
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
}

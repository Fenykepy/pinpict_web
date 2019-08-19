import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './pictureDetail.module.css'

import settings from 'photobook_config'

const BASE_URL = settings.base_url


export default class PictureDetail extends Component {
  
  render() {
    console.log('PictureDetail', this.props)

    return (
      <div
        className={styles.overlay}
      >
        <article
          className={styles.picture}
        >
          <a
            href={BASE_URL + 'media/pictures/full/' + this.props.pict.path}
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
      </div>
    )
  }
}

PictureDetail.propTypes = {
  pict: PropTypes.shape({
    sha1: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  selectNext: PropTypes.func.isRequired,
  selectPrev: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './album.module.css'

import settings from 'photobook_config'

import { setAlbum } from 'app/actions'

import { getPicturePath } from 'librairy/actions'

const BASE_URL = settings.base_url

export default class Album extends Component {
  
  openDetail(e) {
    e.preventDefault()
    // open detail view here
    this.props.dispatch(setAlbum(this.props.album.slug))
  }

  render() {
    console.log('Album', this.props)

    return (
      <article
        className={styles.album}
      >
        <a
          href="/"
          onClick={this.openDetail.bind(this)}
          title={'More from ' + this.props.album.title}
        >
          <header><h1>{this.props.album.title}</h1></header>
          <div
            className={styles.imgWrapper}
          >
            <img
              src={BASE_URL + 'media/pictures/full/' + 
                getPicturePath(this.props.album.pictures[0])}
              alt={this.props.album.title}
            />
          </div>
        </a>
      </article> 
    )
  }
}

Album.propTypes = {
  album: PropTypes.shape({
    slug: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    pictures: PropTypes.array.isRequired, 
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
}

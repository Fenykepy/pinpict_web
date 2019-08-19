import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { setAlbumSelected } from 'app/actions'

import PicturesList from 'librairy/components/picturesList/PicturesList'

import styles from './albumDetail.module.css'

export default class AlbumDetail extends Component {
  
  selectPicture(sha1) {
    this.props.dispatch(setAlbumSelected(sha1))
  }

  selectNext(index) {
    
  }

  selectPrev(index) {

  }

  render() {
    console.log('AlbumDetail', this.props)

    return (
      <section
        className={styles.albumDetail}
      >
        <header>
          <h1>{this.props.album.title}</h1>
          <p
            className={styles.description}
          >{this.props.album.description}</p>
          <p
            className={styles.nPicts}
          >{this.props.album.pictures.length} pictures</p>
        </header>
        <PicturesList
          pictures={this.props.album_pictures}
          selected_sha1={this.props.selected_sha1}
          selectPicture={this.selectPicture.bind(this)}
          selectNext={this.selectNext.bind(this)}
          selectPrev={this.selectPrev.bind(this)}
        />
      </section>
    )
  }
}

AlbumDetail.propTypes = {
  album: PropTypes.shape({
    slug: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    pictures: PropTypes.array.isRequired, 
  }).isRequired,
  album_pictures: PropTypes.array.isRequired,
  selected_sha1: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,  
}

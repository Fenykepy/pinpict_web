import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Album from 'librairy/components/album/Album'

import styles from './albumsList.module.css'

export default class AlbumsList extends Component {
  
  render() {
    console.log('AlbumsList', this.props)

    return (
      <section
        className={styles.albumsList}
      >
        {this.props.albums.map(album =>
          <Album
            key={album.slug}
            album={album}
          />
        )}
      </section>
    )
  }
}

AlbumsList.propTypes = {
  albums: PropTypes.array.isRequired,
}

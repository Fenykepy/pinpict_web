import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AlbumsList from 'librairy/components/albumsList/AlbumsList'
import AlbumDetail from 'librairy/components/albumDetail/AlbumDetail.js'

export default class Albums extends Component {

  render() {
    console.log('Albums', this.props)

    if (this.props.album && this.props.album.slug) {
      // a specific album is selected, show detail view
      return (
        <AlbumDetail
          album={this.props.album}
          album_pictures={this.props.album_pictures}
          selected_sha1={this.props.selected_sha1}
          selected={this.props.selected}
          dispatch={this.props.dispatch}
        />
      )
    }
    
    // no album selected, show albums list
    return (
      <AlbumsList
        albums={this.props.albums}
        dispatch={this.props.dispatch}
      />
    )
  }
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  album: PropTypes.object.isRequired,
  album_pictures: PropTypes.array.isRequired,
  selected_sha1: PropTypes.string.isRequired,
  selected: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

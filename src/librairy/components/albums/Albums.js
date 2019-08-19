import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AlbumsList from 'librairy/components/albumsList/AlbumsList'

export default class Albums extends Component {

  render() {
    console.log('Albums', this.props)

    if (this.props.album) {
      // a specific album is selected, show detail view
      return (
        <div />
      )
    }
    
    // no album selected, show albums list
    return (
      <AlbumsList
        albums={this.props.albums}
      />
    )
  }
}

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  album: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

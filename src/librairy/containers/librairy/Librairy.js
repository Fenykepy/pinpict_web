import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { librairySelector } from 'librairy/selectors'

import {
  ALBUMS_MODULE,
  PICTURES_MODULE,
} from 'app/actionsTypes'

import Pictures from 'librairy/components/pictures/Pictures'
import Albums from 'librairy/components/albums/Albums'

class Librairy extends Component {

  render() {
    console.log('Librairy', this.props)
  
    if (this.props.navigation.module === ALBUMS_MODULE) {
      return (
        <Albums
          albums={this.props.albums}
          album={this.props.navigation.album}
          picture={this.props.navigation.album_picture}
        />
      ) 
    }

    if (this.props.navigation.module === PICTURES_MODULE) {
      return (
          <Pictures
            pictures={this.props.pictures}
            picture={this.props.navigation.picture}
          />
      )
    }
  }
}

Librairy.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pictures: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
}

// Wrap the component to inject dispatch and state into it
export default connect(librairySelector)(Librairy)

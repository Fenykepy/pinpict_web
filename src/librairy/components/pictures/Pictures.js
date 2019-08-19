import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PicturesList from 'librairy/components/picturesList/PicturesList'

export default class Pictures extends Component {
  
  render() {
    console.log('Pictures', this.props)

    return (
      <div>
        <PicturesList
          pictures={this.props.pictures}
          picture={this.props.picture}
        />
      </div>
    )
  }
}

PicturesList.propTypes = {
  pictures: PropTypes.array.isRequired,
  picture: PropTypes.string.isRequired,
}

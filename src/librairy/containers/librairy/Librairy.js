import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { librairySelector } from 'librairy/selectors'

import PicturesList from 'librairy/components/picturesList/PicturesList'

class Librairy extends Component {

  render() {
    console.log('Librairy', this.props)
    
    return (
      <div>
        <PicturesList
          pictures={this.props.pictures}
        />
      </div>
    )
  }
}

Librairy.propTypes = {
  dispatch: PropTypes.func.isRequired,
  pictures: PropTypes.array.isRequired,
  albums: PropTypes.array.isRequired,
}

// Wrap the component to inject dispatch and state into it
export default connect(librairySelector)(Librairy)

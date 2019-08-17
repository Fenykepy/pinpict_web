import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { librairySelector } from 'librairy/selectors'

class Librairy extends Component {

  // We show a list of all pictures
  render() {
    console.log('Librairy', this.props)
    return (
      <div>
        <div
        >test</div>
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import settings from 'photobook_config'

const BASE_URL = settings.base_url

export default class Picture extends Component {
  
  render() {
    console.log('Picture', this.props)

    return (
      <article>
        <img
          src={BASE_URL + 'media/pictures/full/' + this.props.pict.path}
          alt={this.props.pict.description}
        />
        <p>{this.props.pict.description}</p>
      </article>
    )
  }
}

Picture.propTypes = {
  pict: PropTypes.shape({
    sha1: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
}

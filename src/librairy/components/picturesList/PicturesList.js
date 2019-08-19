import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Picture from 'librairy/components/picture/Picture'

import styles from './picturesList.module.css'

export default class PicturesList extends Component {
  
  render() {
    console.log('PicturesList', this.props)

    return (
      <div
        className={styles.picturesList}
      >
        {this.props.pictures.map((pict, index) =>
          <Picture
            key={pict.sha1}
            pict={pict}
            index={index}
            selectPicture={this.props.selectPicture}
          />
        )}
      </div>
    )
  }
}

PicturesList.propTypes = {
  pictures: PropTypes.array.isRequired,
  selected_sha1: PropTypes.string.isRequired,
  selected: PropTypes.object.isRequired,
  selectPicture: PropTypes.func.isRequired,
  selectNext: PropTypes.func.isRequired,
  selectPrev: PropTypes.func.isRequired,
}

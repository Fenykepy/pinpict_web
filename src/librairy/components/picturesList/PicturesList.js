import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Picture from 'librairy/components/picture/Picture'

import styles from './picturesList.module.css'

export default class PicturesList extends Component {
  
  render() {
    console.log('PicturesList', this.props)

    return (
      <section
        className={styles.picturesList}
      >
        {this.props.pictures.map(pict =>
          <Picture
            key={pict.sha1}
            pict={pict}
          />
        )}
      </section>
    )
  }
}

PicturesList.propTypes = {
  pictures: PropTypes.array.isRequired,
}

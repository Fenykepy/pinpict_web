import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Picture from 'librairy/components/picture/Picture'
import PictureDetail from 'librairy/components/pictureDetail/PictureDetail'

import styles from './picturesList.module.css'

export default class PicturesList extends Component {
  
  getPictureDetail() {
    if (this.props.selected_sha1) {
      return (
        <PictureDetail
          pict={this.props.selected}
          selectNext={this.props.selectNext}
          selectPrev={this.props.selectPrev}
          dispatch={this.props.dispatch}
        />
      )
    }
    return null
  }

  render() {
    console.log('PicturesList', this.props)

    return (
      <div
        className={styles.picturesList}
      >
        {this.getPictureDetail()}
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
  dispatch: PropTypes.func.isRequired,
}

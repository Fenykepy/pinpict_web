import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { setAllSelected } from 'app/actions'

import PicturesList from 'librairy/components/picturesList/PicturesList'

export default class Pictures extends Component {

  selectPicture(sha1) {
    this.props.dispatch(setAllSelected(sha1))  
  }

  selectNext() {
    
  }

  selectPrev() {

  }

  render() {
    console.log('Pictures', this.props)

    return (
      <section>
        <PicturesList
          pictures={this.props.pictures}
          pictures_order={this.props.pictures_order}
          selected_sha1={this.props.selected_sha1}
          selected={this.props.selected}
          selectPicture={this.selectPicture.bind(this)}
          selectNext={this.selectNext.bind(this)}
          selectPrev={this.selectPrev.bind(this)}
        />
      </section>
    )
  }
}

Pictures.propTypes = {
  pictures: PropTypes.array.isRequired,
  pictures_order: PropTypes.array.isRequired,
  selected_sha1: PropTypes.string.isRequired,
  selected: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

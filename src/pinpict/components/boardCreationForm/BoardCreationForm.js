import React, { Component } from 'react'
import PropTypes from 'prop-types'

import withModal from 'modal/HOC/withModal'

class BoardCreationForm extends Component {

  render() {

    console.log('withModal in board creation', withModal)
    console.log('BoardCreationBoard', this.props)

    return (
      <article>Board creation form</article>
    )
  }
}

BoardCreationForm.propTypes = {

}

// wrap component in modal
export default withModal(BoardCreationForm)

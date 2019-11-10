import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'


export default class BackToBoardButton extends Component {

  render() {

    if (this.props.userslug && this.props.boardslug) {
      return (
        <Link
          to={`/${this.props.userslug}/${this.props.boardslug}/`}
          className={this.props.className}
          title="Go to board"
        >
            <span className="accessibility_text">Back to board</span>
        </Link>
      )
    }
    return null
  }
}


BackToBoardButton.propTypes = {
  userslug: PropTypes.string,
  boardslug: PropTypes.string,
  className: PropTypes.string,
}

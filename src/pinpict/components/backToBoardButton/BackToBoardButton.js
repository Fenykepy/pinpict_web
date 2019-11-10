import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'


export default class BackToBoardButton extends Component {

  render() {

    if (this.props.user_slug && this.props.board_slug) {
      return (
        <Link
          to={`/${this.props.user_slug}/${this.props.board_slug}/`}
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
  user_slug: PropTypes.string,
  board_slug: PropTypes.string,
  className: PropTypes.string,
}

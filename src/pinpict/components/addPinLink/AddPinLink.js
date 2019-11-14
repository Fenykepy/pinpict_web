import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import styles from 'pinpict/components/createBoardButton/createBoardButton.module.css'

import RoundCross from 'forms/components/roundCross/RoundCross'

import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

export default class AddPinLink extends Component {

  static contextType = AppContext
  
  render() {
    
    // we show button only in user is owner
    if (! this.context.authenticatedslug ||
        this.context.authenticatedslug !== this.props.userslug) {
          return null
    }

    return (
      <article
        className={styles.create}
      >
        <Link
          to="/pin/from"
        ><RoundCross
            title={this.props.title}
        /></Link>
      </article>
    )
  }
}

AddPinLink.propTypes = {
  title: PropTypes.string.isRequired,
  userslug: PropTypes.string.isRequired,
}

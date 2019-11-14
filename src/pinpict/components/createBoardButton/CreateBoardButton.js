import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './createBoardButton.module.css'

import RoundCross from 'forms/components/roundCross/RoundCross'

import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

export default class CreateBoardButton extends Component {

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
        <button
          onClick={this.props.onClick}
        ><RoundCross
            title={this.props.title}
        /></button>
      </article>
    )
  }
}

CreateBoardButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  userslug: PropTypes.string.isRequired,
}

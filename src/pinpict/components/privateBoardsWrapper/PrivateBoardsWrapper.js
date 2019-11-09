import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

import BoardsList from 'pinpict/components/boardsList/BoardsList'

import styles from 'pinpict/containers/boards/boards.module.css'

export default class PrivateBoardWrapper extends Component {

  static contextType = AppContext

  shouldShowPrivateBoards() {
    if (! this.context.authenticated_slug) {
      // user isn't authenticated
      return false
    }
    if (this.props.match.params.selected_user_slug === this.context.authenticated_slug) {
      // selected user is authenticated user
      return true
    }
    // user is authenticated, but not the selected user, show section
    // only if we got some private boards
    return (this.props.private_boards.length > 0)
  }
  
  render() {

    console.log('PrivateBoardWrapper', this.props, this.context)

    // We only show private board section under conditions
    if (! this.shouldShowPrivateBoards()) return null 

    return (
        <div
          className={styles.privateBoardsWrapper}
        >
          <section
            className={styles.boardsSection + " columned"}
          >
            <h2>Private boards</h2>
            <BoardsList
              boards={this.props.private_boards}
              match={this.props.match}
            />
          </section>
        </div>
      
    )
  }
}

PrivateBoardWrapper.propTypes = {
  match: PropTypes.object.isRequired,
  private_boards: PropTypes.array.isRequired,
}

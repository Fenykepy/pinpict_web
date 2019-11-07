import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BoardsList from 'pinpict/components/boardsList/BoardsList'

import styles from 'pinpict/containers/boards/boards.module.css'

export default class PrivateBoardWrapper extends Component {

  render() {
    // We don't show private board section if user isn't authenticated
    if (! this.props.userslug) return null 

    return (
        <div
          className={styles.privateBoardsWrapper}
        >
          <section
            className={styles.boardsSection}
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
  userslug: PropTypes.string,
}

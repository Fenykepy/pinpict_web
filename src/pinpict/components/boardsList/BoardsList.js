import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './boardsList.module.css'

import BoardAbstract from 'pinpict/components/boardAbstract/BoardAbstract'

export default class BoardsList extends Component {

  render() {

    console.log('BoardsList', this.props)

    return (
      <div
        className={styles.boardsList}
      >
          {this.props.boards.map(board =>
            (<BoardAbstract
              match={this.props.match}
              key={board.slug}
              {...board}
            />)
          )}
      </div>
    )
  }
}

BoardsList.propTypes = {
  boards: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}

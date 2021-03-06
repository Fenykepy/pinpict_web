import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BoardAbstract from 'pinpict/components/boardAbstract/BoardAbstract'
import CreateBoardButton from 'pinpict/components/createBoardButton/CreateBoardButton'

export default class BoardsList extends Component {

  render() {

    console.log('BoardsList', this.props)

    return (
      <div>
        <CreateBoardButton
          title={this.props.private ? "Create a private board" :
            "Create a board"}
          userslug={this.props.match.params.userslug}
          onClick={this.props.createBoard}
        />
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
  createBoard: PropTypes.func.isRequired,
}

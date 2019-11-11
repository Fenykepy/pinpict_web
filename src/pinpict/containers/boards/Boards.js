import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { boardsListSelector } from 'pinpict/selectors'

import {
  selectUser,
  fetchUserIfNeeded,
  fetchUserPublicBoardsIfNeeded,
  fetchUserPrivateBoardsIfNeeded,

} from 'pinpict/actions'

import { setModal } from 'modal/actions'

import { CREATE_BOARD }from 'modal/modalIds'

import styles from './boards.module.css'

import Spinner from 'app/components/spinner/Spinner'
import Modal from 'modal/containers/modal/Modal'
import UserDetail from 'pinpict/components/userDetail/UserDetail'
import BoardsList from 'pinpict/components/boardsList/BoardsList'
import PrivateBoardsWrapper from 'pinpict/components/privateBoardsWrapper/PrivateBoardsWrapper'


class Boards extends Component {

  fetchDatas(userslug) {
    this.props.dispatch(selectUser(userslug))
    this.props.dispatch(fetchUserIfNeeded(userslug))
    this.props.dispatch(fetchUserPublicBoardsIfNeeded(userslug))
    this.props.dispatch(fetchUserPrivateBoardsIfNeeded(userslug))
  }


  componentDidMount() {
    // we fetch given user and his boards
    this.fetchDatas(this.props.match.params.userslug)
  }

  componentDidUpdate(prevProps) {
    // we fetch given user and his boards if params changed
    if (this.props.match.params.userslug !== prevProps.match.params.userslug) {
      this.fetchDatas(this.props.match.params.userslug)
    }
  }

  createBoard(e, is_private=false) {
    e.preventDefault()
    console.log('create board')
    this.props.dispatch(setModal(CREATE_BOARD))

  }

  render() {
    console.log('Boards', this.props)

    if (! this.props.user.slug || this.props.user.is_fetching ||
        ! this.props.public_boards ) {
          return (
            <Spinner
              message="Fetching..."
            />
          )
    }

    return (
      <div>
        <UserDetail
          user={this.props.user}
        />
        <section
            className={styles.boardsSection + " columned"}
        >
          <BoardsList
            boards={this.props.public_boards}
            match={this.props.match}
            createBoard={this.createBoard.bind(this)}
          />
        </section>
        <PrivateBoardsWrapper
            private_boards={this.props.private_boards}
            match={this.props.match}
            createBoard={(e) => this.createBoard(e, true).bind(this)}
        />
        <Modal
          id={CREATE_BOARD}
        >
            <article>Create a board</article>
        </Modal>
      </div>
    )
    
  }
}

Boards.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  public_boards: PropTypes.array.isRequired,
  private_boards: PropTypes.array.isRequired,
}


export default withRouter(connect(boardsListSelector)(Boards))


import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { boardDetailSelector } from 'pinpict/selectors'

import {
  selectUser,
  selectBoard,
  fetchUserIfNeeded,
  fetchShortBoardIfNeeded,
} from 'pinpict/actions'

import styles from './boardDetail.module.css'

import Spinner from 'app/components/spinner/Spinner'
import UserShortDetail from 'pinpict/components/userShortDetail/UserShortDetail'
import PinsList from 'pinpict/components/pinsList/PinsList'

class BoardDetail extends Component {
  
  fetchDatas(user_slug, board_slug) {
    this.props.dispatch(selectUser(user_slug))
    this.props.dispatch(selectBoard(user_slug, board_slug))
    this.props.dispatch(fetchUserIfNeeded(user_slug))
    this.props.dispatch(fetchShortBoardIfNeeded(
      user_slug, board_slug))
  }

  componentDidMount() {
    this.fetchDatas(
      this.props.match.params.user_slug,
      this.props.match.params.board_slug
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.user_slug !== prevProps.match.params.user_slug ||
        this.props.match.params.board_slug !== prevProps.match.params.board_slug) {
          this.fetchDatas(
            this.props.match.params.user_slug,
            this.props.match.params.board_slug
          )
    }
  }

  getPrivateMessage() {
    if (this.props.board.policy === 0) {
      return (
        <p
          className={styles.private}
        >This board is private</p>
      )
    }
    return null
  }

  render() {
    console.log('BoardDetail', this.props)

    if (! this.props.user.slug || this.props.user.is_fetching ||
        ! this.props.board.slug || this.props.board.is_fetching_short ) {
          return (
            <Spinner
              message="Fetching..."
            />
          )
    }


    return (
        <section className={styles.boardDetail + " columned"}>
          <header>
            <h1>{this.props.board.title}</h1>
            <p
              className={styles.nPins}
            >{this.props.board.n_pins} {this.props.board.n_pins === 1 ? "pin" : "pins"}</p>
            {this.getPrivateMessage()}
          </header>
          <UserShortDetail
            user={this.props.user}
          />
          <PinsList
            pins={this.props.pins}
            match={this.props.match}
          />
        </section>
    )
  }
}

BoardDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  board: PropTypes.object.isRequired,
  pins: PropTypes.array.isRequired,
}

export default withRouter(connect(boardDetailSelector)(BoardDetail))

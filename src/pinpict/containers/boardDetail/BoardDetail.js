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
  
  fetchDatas(selected_user_slug, selected_board_slug) {
    this.props.dispatch(selectUser(selected_user_slug))
    this.props.dispatch(selectBoard(selected_user_slug, selected_board_slug))
    this.props.dispatch(fetchUserIfNeeded(selected_user_slug))
    this.props.dispatch(fetchShortBoardIfNeeded(
      selected_user_slug, selected_board_slug))
  }

  componentDidMount() {
    this.fetchDatas(
      this.props.match.params.selected_user_slug,
      this.props.match.params.selected_board_slug
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.selected_user_slug !== prevProps.match.params.selected_user_slug ||
        this.props.match.params.selected_board_slug !== prevProps.match.params.selected_board_slug) {
          this.fetchDatas(
            this.props.match.params.selected_user_slug,
            this.props.match.params.selected_board_slug
          )
    }
  }

  getPrivateMessage() {
    if (this.props.selected_board.policy === 0) {
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

    if (! this.props.selected_user.slug || this.props.selected_user.is_fetching ||
        ! this.props.selected_board.slug || this.props.selected_board.is_fetching_short ) {
          return (
            <Spinner
              message="Fetching..."
            />
          )
    }


    return (
        <section className={styles.boardDetail + " columned"}>
          <header>
            <h1>{this.props.selected_board.title}</h1>
            <p
              className={styles.nPins}
            >{this.props.selected_board.n_pins} {this.props.selected_board.n_pins === 1 ? "pin" : "pins"}</p>
            {this.getPrivateMessage()}
          </header>
          <UserShortDetail
            selected_user={this.props.selected_user}
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
  selected_user: PropTypes.object.isRequired,
  selected_board: PropTypes.object.isRequired,
  pins: PropTypes.array.isRequired,
}

export default withRouter(connect(boardDetailSelector)(BoardDetail))

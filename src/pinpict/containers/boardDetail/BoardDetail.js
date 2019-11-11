import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { boardDetailSelector } from 'pinpict/selectors'

import { setModal } from 'modal/actions'

import { ADD_PIN }from 'modal/modalIds'

import {
  selectUser,
  selectBoard,
  fetchUserIfNeeded,
  fetchShortBoardIfNeeded,
  fetchPinIfNeeded,
} from 'pinpict/actions'

import styles from './boardDetail.module.css'

import Spinner from 'app/components/spinner/Spinner'
import UserShortDetail from 'pinpict/components/userShortDetail/UserShortDetail'
import PinsList from 'pinpict/components/pinsList/PinsList'

class BoardDetail extends Component {
  
  fetchDatas(userslug, boardslug) {
    this.props.dispatch(selectUser(userslug))
    this.props.dispatch(selectBoard(userslug, boardslug))
    this.props.dispatch(fetchUserIfNeeded(userslug))
    this.props.dispatch(fetchShortBoardIfNeeded(
      userslug, boardslug))
  }
  
  fetchPins() {
    if (this.props.board.pins) {
      for (const pin_id of this.props.board.pins) {
        this.props.dispatch(fetchPinIfNeeded(pin_id))
      }
    }
  }

  componentDidMount() {
    this.fetchDatas(
      this.props.match.params.userslug,
      this.props.match.params.boardslug
    )
    this.fetchPins()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userslug !== prevProps.match.params.userslug ||
        this.props.match.params.boardslug !== prevProps.match.params.boardslug) {
          this.fetchDatas(
            this.props.match.params.userslug,
            this.props.match.params.boardslug
          )
          this.fetchPins()
    }
    if (this.props.board.pins !== prevProps.board.pins) {
        this.fetchPins()
    }
  }

  getDescription() {
    if (this.props.board.description) {
      return (
        <p
          className={styles.description}
        >{this.props.board.description}</p>
      )
    }
    return null
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

  createPin(e, is_private=false) {
    e.preventDefault()
    console.log('add Pin !')
    this.props.dispatch(setModal(ADD_PIN))
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
            {this.getDescription()}
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
            createPin={this.createPin.bind(this)}
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

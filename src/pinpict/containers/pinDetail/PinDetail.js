import React, { Component } from 'react'
import PropTypes from 'prop-types'

import settings from 'pinpict_config'

import { getPicturePath } from 'helpers/utils'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { pinDetailSelector } from 'pinpict/selectors'

import {
  selectPin,
  selectUser,
  selectBoard,
  fetchPinIfNeeded,
  fetchUserIfNeeded,
  fetchShortBoardIfNeeded,
} from 'pinpict/actions'

import styles from './pinDetail.module.css'

import Spinner from 'app/components/spinner/Spinner'
import PrevPinButton from 'pinpict/components/prevPinButton/PrevPinButton'
import NextPinButton from 'pinpict/components/nextPinButton/NextPinButton'
import PinDetailHeader from 'pinpict/components/pinDetailHeader/PinDetailHeader'
import PinDetailFooter from 'pinpict/components/pinDetailFooter/PinDetailFooter'
import UserAdded from 'pinpict/components/userAdded/UserAdded'

const BASE_URL = settings.base_url


class PinDetail extends Component {

  fetchPin(pin_id) {
    this.props.dispatch(selectPin(pin_id))
    this.props.dispatch(fetchPinIfNeeded(pin_id))
  }
  
  fetchUserAndBoard() {
    if (this.props.pin.user && this.props.pin.board) {
      // we fetch pin's board and user
      this.props.dispatch(selectUser(this.props.pin.user))
      this.props.dispatch(fetchUserIfNeeded(this.props.pin.user))
      this.props.dispatch(selectBoard(this.props.pin.user, this.props.pin.board))
      this.props.dispatch(fetchShortBoardIfNeeded(this.props.pin.user, this.props.pin.board))
    }
  }

  componentDidMount() {
    this.fetchPin(this.props.match.params.pin_id)
    this.fetchUserAndBoard()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.pin_id !== prevProps.match.params.pin_id) {
      this.fetchPin(this.props.match.params.pin_id)
    }
    if (this.props.pin.user !== prevProps.pin.user ||
        this.props.pin.board !== prevProps.pin.board) {
          console.log('fetch user and board')
          this.fetchUserAndBoard()
    }
  }

  render() {

    console.log('PinDetail', this.props)

    if (! this.props.pin.id || this.props.pin.is_fetching) {
      return (
        <Spinner
          message="Fetching..."
        />
      )
    }

    return (
      <section
        className={styles.pin_detail}
      >
        <article
          className={styles.pin}
        >
          <PinDetailHeader
            image_link={this.props.pin.source || 
              BASE_URL + 'media/previews/full/' + 
              getPicturePath(this.props.pin.sha1)}
            userslug={this.props.pin.user}
            boardslug={this.props.pin.board}
            source={this.props.pin.source}
            likes={this.props.pin.n_likes}
          />
          <PrevPinButton
            pins_ids={this.props.board.pins}
            pin_id={this.props.match.params.pin_id}
            className={styles.prev_pin}
          />
          <NextPinButton
            pins_ids={this.props.board.pins}
            pin_id={this.props.match.params.pin_id}
            className={styles.next_pin}
          />
          {/* We link full image if uploaded, and original url if pined from a site. */}
          <a
            href={this.props.pin.source ? this.props.pin.source : BASE_URL + 
              'media/previews/full/' + getPicturePath(this.props.pin.sha1)}
            target="_blank"
            rel="noopener noreferrer"
            title="Open image in new tab"
          >
            <div
              className={styles.img_wrapper}
            >
              <img
                src={BASE_URL + 'media/previews/736/' + getPicturePath(this.props.pin.sha1)}
                alt={this.props.pin.description}
              />
            </div>
          </a>
          {/* TODO parse hashtags in description */}
          <p
            className={styles.description}
          >{this.props.pin.description}</p>
          <PinDetailFooter
            source={this.props.pin.source}
            source_domain={this.props.pin.source_domain}
            rate={this.props.pin.owner_rate}
            username={this.props.user.username}
            userslug={this.props.user.slug}
            pin_id={this.props.pin.id}
          />
        </article>
        
        {/* TODO add user article */}
        <UserAdded
          message="Added by"
          user={this.props.user}
          date={this.props.pin.date_created}
        />
        {/* TODO add added via article */}
      </section>
    )

  }
}

PinDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  board: PropTypes.object.isRequired,
  pin: PropTypes.object.isRequired,
}



export default withRouter(connect(pinDetailSelector)(PinDetail))

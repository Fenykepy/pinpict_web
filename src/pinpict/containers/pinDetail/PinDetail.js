import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import settings from 'pinpict_config'

import { getPicturePath } from 'helpers/utils'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { pinDetailSelector } from 'pinpict/selectors'

import {
  selectUser,
  selectPin,
  fetchUserIfNeeded,
  fetchPinIfNeeded
} from 'pinpict/actions'


import Spinner from 'app/components/spinner/Spinner'


const BASE_URL = settings.base_url


class PinDetail extends Component {

  fetchDatas(pin_id, selected_user_slug) {
    this.props.dispatch(selectPin(pin_id))
    this.props.dispatch(fetchPinIfNeeded(pin_id))
    if (selected_user_slug) {
      // we need to fetch pin first
      this.props.dispatch(selectUser(selected_user_slug))
      this.props.dispatch(fetchUserIfNeeded(selected_user_slug))
    }
  }

  componentDidMount() {
    this.fetchDatas(
      this.props.match.params.pin_id,
      this.props.pin.user
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.pin_id !== prevProps.match.params.pin_id) {
      this.fetchDatas(
        this.props.match.params.pin_id,
        this.props.pin.user
      )
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
        className="pin_detail"
      >
        <article
          className="pin"
        >
          <header>
            {/* TODO link to site */}
            {/* TODO link to picture */}
            {/* TODO edit if owner */}
            {/* TODO number of likes */}
            {/* TODO pin it if authenticated */}
          </header>
          {/* TODO prev link */}
          {/* TODO next link */}
          {/* We link full image if uploaded, and original url if pined from a site. */}
          <a
            href={this.props.pin.source ? this.props.pin.source : BASE_URL + 'media/previews/full/' + getPicturePath(this.props.pin.sha1)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="image_wrapper"
            >
              <img
                src={BASE_URL + 'media/previews/736/' + getPicturePath(this.props.pin.sha1)}
                alt={this.props.pin.description}
              />
            </div>
          </a>
          <p
            className="pin_description"
          >{this.props.pin.description}</p>
          <footer>
            {/* TODO source link if pinned from site */}
            {/* TODO "Uploaded to pinpict" if uploaded */}
            {/* TODO rate form if owner */}
          </footer>
        </article>
      </section>
    )

  }
}

PinDetail.propTypes = {
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  selected_user: PropTypes.object.isRequired,
  selected_board: PropTypes.object.isRequired,
  pin: PropTypes.object.isRequired,
}



export default withRouter(connect(pinDetailSelector)(PinDetail))

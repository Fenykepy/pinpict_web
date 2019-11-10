import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'


export default class PrevPinButton extends Component {

  render() {
    //console.log('PrevPinButton', this.props)

    // no pins list givent
    if (! this.props.pins_ids || this.props.pins_ids.length === 0) {
      return null
    }

    let index = this.props.pins_ids.indexOf(parseInt(this.props.pin_id))

    // we are at first pin
    if (index === 0) return null
    
    let prev_id = this.props.pins_ids[index - 1]

    return (
      <Link
        to={`/pin/${prev_id}/`}
        className={this.props.className}
        title="Go to previous pin"
      ><div>
          <span className="accessibility_text">Go to previous pin</span></div>
      </Link>
    )
  }
}


PrevPinButton.propTypes = {
  pins_ids: PropTypes.array,
  pin_id: PropTypes.string,
  className: PropTypes.string,
}

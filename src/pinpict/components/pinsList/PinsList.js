import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Pin from 'pinpict/components/pin/Pin'

export default class PinsList extends Component {

  render() {

    console.log('PinsList', this.props)

    return(
      <div>
          {this.props.pins.map(pin =>
             (<Pin 
                {...pin}
                match={this.props.match}
            />)
          )}
      </div>
    )
  }
}

PinsList.propTypes = {
  pins: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired,
}


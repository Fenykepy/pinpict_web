import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AddPinLink from 'pinpict/components/addPinLink/AddPinLink'
import Pin from 'pinpict/components/pin/Pin'

export default class PinsList extends Component {

  render() {

    console.log('PinsList', this.props)

    return(
      <div>
        <AddPinLink
          message={"Add a pin"}
          userslug={this.props.match.params.userslug}
        />
          {this.props.pins.map(pin =>
             (<Pin 
                {...pin}
                key={pin.id}
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


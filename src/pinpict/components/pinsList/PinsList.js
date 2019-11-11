import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AddCreateButton from 'pinpict/components/addCreateButton/AddCreateButton'
import Pin from 'pinpict/components/pin/Pin'

export default class PinsList extends Component {

  render() {

    console.log('PinsList', this.props)

    return(
      <div>
        <AddCreateButton
          message={"Add a pin"}
          userslug={this.props.match.params.userslug}
          onClick={this.props.createPin}
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
  createPin: PropTypes.func.isRequired,
}


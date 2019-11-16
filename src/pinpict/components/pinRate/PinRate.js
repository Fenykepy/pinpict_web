import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AppContext } from 'app/components/appContextProvider/AppContextProvider'
import { updatePin } from 'pinpict/actions'
import styles from './pinRate.module.css'

export default class PinRate extends Component {

  static contextType = AppContext

  getNextRate(index, rate) {
    // returns rate that will be set if button is clicked
    if (rate === 0) { return index + 1 }
    if (rate === index + 1) { return index } // we decrease rate when we click on last star
    return index +1
  }

  ratePin(rate) {
    this.context.dispatch(updatePin(
      this.props.pin_id,
      {owner_rate: rate}
    ))
    //console.log(`rate pin ${this.props.pin_id} at ${rate}`)
  }

  render() {  
    
    if (! this.context.authenticatedslug === this.props.userslug) {
      // user isn't owner, do nothing
      return null
    }

    let rater = []
    for (let i = 0; i < 5; i++) {
      let item = {}
      item.key = i
      item.class = i < this.props.rate ? styles.star : styles.dot
      item.next_rate = this.getNextRate(i, this.props.rate)
      item.text = `rate at ${item.next_rate}`

      rater.push(item)
    }

    return (
      <ul
        className={styles.rater}
      >
        {rater.map(item => (
          <li
            key={item.key}
          ><button
            onClick={() => this.ratePin(item.next_rate)}
            className={item.class}
            title={item.text}
          ><span className="accessibility_text">{item.text}</span></button></li>
        ))}
      </ul>
    )
  }
}

PinRate.propTypes = {
  pin_id: PropTypes.number.isRequired,
  rate: PropTypes.number,
  userslug: PropTypes.string,
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import PinRate from 'pinpict/components/pinRate/PinRate'

export default class PinDetailFooter extends Component {


  getLink() {
    if (! this.props.source || ! this.props.source_domain) {
      // file has been uploaded
      return (
        <Link
          to={`/${this.props.userslug}/`}
        ><span>Uploaded to Pinpict by</span> {this.props.username}</Link>
      )
    }

    return (
      <a
        href={this.props.source}
        target="_blank"
        rel="noopener noreferrer"
      ><span>Found on</span> {this.props.source_domain}</a>
    )
  }


  render() {
    //console.log('PinDetailFooter', this.props)
    
    return (
      <footer
        className={this.props.className}
      >
        {this.getLink()}
        <PinRate
          rate={this.props.rate}
          userslug={this.props.userslug}
        />
      </footer>
    )
  }
}


PinDetailFooter.propTypes = {
  source: PropTypes.string,
  source_domain: PropTypes.string,
  rate: PropTypes.number,
  className: PropTypes.string,
  username: PropTypes.string,
  userslug: PropTypes.string,
}

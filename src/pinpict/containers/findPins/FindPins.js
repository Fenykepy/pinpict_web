import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { scanSelector } from 'pinpict/selectors'

import { scanIfNeeded } from 'pinpict/actions'

import Spinner from 'app/components/spinner/Spinner'
import PinsList from 'pinpict/components/pinsList/PinsList'


class FindPins extends Component {

  constructor(props) {
    super(props)

    this.state = {
      url: '',
    }
  }

  componentDidMount() {
    let query = new URLSearchParams(this.props.location.search)
    let url = decodeURIComponent(query.get('url'))

    if (! url) {
      // if no url given, we redirect to url form
      this.props.history.push('/pin/from/webpage/')
    }

    // start server request if necessary
    this.setState({url: url})
    this.props.dispatch(scanIfNeeded(url))
  }

  render() {

    console.log('FindPins', this.props)


    // If scanning, show spinner
    if (this.props.scan.is_scanning) {
      return (
        <div>
          <Spinner />
          <p>Search pictures on <a href={this.state.url}>{this.state.url}</a></p>
        </div>
      )
    }

    // If no results and scan is done, show no results message
    if (this.props.scan.results && this.props.scan.results.length === 0) {
      return (
        <p>No pictures found on {this.state.url}</p>
      )
    }

    // If error show errors
    if (this.props.scan.errors) {
      return (
        <p>Oups... It seems an error occured: {this.props.scan.errors}</p>
      )
    }

    // Else show results list 
    console.log('results', this.props.scan.results)

    return (
      <p>Pick a picture</p>
    )
  }
}

FindPins.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scan: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(connect(scanSelector)(FindPins))

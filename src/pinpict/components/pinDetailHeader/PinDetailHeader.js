import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AppContext } from 'app/components/appContextProvider/AppContextProvider'

import Button from 'forms/components/button/Button'
import ButtonLink from 'forms/components/buttonLink/ButtonLink'
import BackToBoardButton from 'pinpict/components/backToBoardButton/BackToBoardButton'

import styles from 'pinpict/containers/pinDetail/pinDetail.module.css'

export default class PinDetailHeader extends Component {

  static contextType = AppContext
  
  getSiteLink() {
    if (! this.props.source) return null
    return (
      <ButtonLink
        href={this.props.source}
        title="Visit original website"
        target="_blank"
        rel="noopener noreferrer"
      >Visit site</ButtonLink>
    )
  }

  getEditOrLikeButton() {
    if (! this.context.authenticatedslug) {
      // user isn't connected, do nothing
      return null
    }

    if (this.context.authenticatedslug === this.props.userslug) {
      // user is owner, return edit button
      // TODO link it to edit function
      return (
        <Button
          title="Edit pin"
        >Edit</Button>
      )
    }
    // return pin button
    // TODO link it to edit function
    return (
      <Button
        title="Like it !"
      >Like</Button>
    )
  }

  getPinButton() {
    if (! this.context.authenticatedslug) {
      // user isn't connected, do nothing
      return null
    }

    // TODO link it to pin function
    return (
      <Button
        className={styles.pinit}
        title="Pin it !"
      >Pin</Button>
    )
  }


  render() {

    return (
      <header>
        {this.getSiteLink()}
        <ButtonLink
          href={this.props.image_link}
          title="Open image in new tab"
          target="_blank"
          rel="noopener noreferrer"
        >Image</ButtonLink>
        {this.getEditOrLikeButton()}
        <Button
          title="Number of likes"
        >{this.props.likes}</Button>
        {this.getPinButton()}
        <BackToBoardButton
          className={styles.back_to_board}
          userslug={this.props.userslug}
          boardslug={this.props.boardslug}
        />
      </header>
    )
  }
}

PinDetailHeader.propTypes = {
  userslug: PropTypes.string.isRequired,
  boardslug: PropTypes.string.isRequired,
  image_link: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  source: PropTypes.string,
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import settings from 'pinpict_config'

const BASE_URL = settings.base_url

export default class UserDetail extends Component {
  
  getEditButton() {
    console.log(this.props.selected_user.slug, this.props.userslug)
    if (this.props.selected_user.slug === this.props.userslug) {
      return <Link to="/profile/">Edit profile</Link>
    }
    return null
  }

  getUserWebsite() {
    if (this.props.selected_user.website) {
      return (
        <div
          className=""
        >
            <a
              href={this.props.selected_user.website}
              target="_blank"
            >{this.props.selected_user.website}</a>
        </div>
      )
    }
    return null
  }

  getUserSocials() {
    let socials = []
    let user = this.props.selected_user

    if (user.facebook_link) {
      socials.push({class: "fb", link: user.facebook_link,
      alt: "facebook link"})
    }
    if (user.flickr_link) {
      socials.push({class: "flickr", link: user.flickr_link,
      alt: "flickr link"})
    }
    if (user.px500_link) {
      socials.push({class: "px500", link: user.px500_link,
      alt: "500px link"})
    }
    if (user.twitter_link) {
      socials.push({class: "twitter", link: user.twitter_link,
      alt: "twitter link"})
    }
    if (user.gplus_link) {
      socials.push({class: "gplus", link: user.gplus_link,
      alt: "google plus link"})
    }
    if (user.pinterest_link) {
      socials.push({class: "pinterest", link: user.pinterest_link,
      alt: "pinterest link"})
    }
    if (user.vk_link) {
      socials.push({class: "vk", link: user.vk_link,
      alt: "vkontakte link"})
    }
    if (user.instagram_link) {
      socials.push({class: "instagram", link: user.instagram_link,
      alt: "instagram link"})
    }
    
    // we return null if no socials links
    if (socials.length === 0) return null

    
    return (
      <ul
        className="social_icons"
      >
          {socials.map(social => 
            (<li
                key={social.class}
              ><a
               href={social.link}
               className={social.class}
               target="_blank"
             ><span
                className="accessibility_text"
               >{social.alt} link</span></a></li>
            )
          )}
      </ul>
    )
  }

  render() {
    return(
      <article
        className=""
      >
          <img
            src={BASE_URL + 'media/' + this.props.selected_user.avatar}
            alt={`${this.props.selected_user.username}'s avatar`}
          />
          <h1>{this.props.selected_user.username}</h1>
          <hr />
          {this.getEditButton()}
          {this.getUserWebsite()}
          {this.getUserSocials()}
      </article>
    )
  }
}


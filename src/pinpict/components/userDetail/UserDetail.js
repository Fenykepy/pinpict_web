import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import settings from 'pinpict_config'
import styles from './userDetail.module.css'

import UserWebsite from 'pinpict/components/userWebsite/UserWebsite'
import UserSocialsLinks from 'pinpict/components/userSocialsLinks/UserSocialsLinks'

const BASE_URL = settings.base_url

export default class UserDetail extends Component {
  
  getEditButton() {
    console.log(this.props.selected_user.slug, this.props.userslug)
    if (this.props.selected_user.slug === this.props.userslug) {
      return <Link to="/profile/">Edit profile</Link>
    }
    return null
  }

  getUserSocials() {
    let socials = []
    let user = this.props.selected_user

    if (user.facebook_link) {
      socials.push({class: styles.fb, link: user.facebook_link,
      alt: "facebook link", title: "Follow on facebook"})
    }
    if (user.flickr_link) {
      socials.push({class: styles.flickr, link: user.flickr_link,
      alt: "flickr link", title: "Follow on flickr"})
    }
    if (user.px500_link) {
      socials.push({class: styles.px500, link: user.px500_link,
      alt: "500px link", title: "Follow on 500px"})
    }
    if (user.twitter_link) {
      socials.push({class: styles.twitter, link: user.twitter_link,
      alt: "twitter link", title: "Follow on twitter"})
    }
    if (user.gplus_link) {
      socials.push({class: styles.gplus, link: user.gplus_link,
      alt: "google plus link", title: "Follow on google +"})
    }
    if (user.pinterest_link) {
      socials.push({class: styles.pinterest, link: user.pinterest_link,
      alt: "pinterest link", title: "Follow on pinterest"})
    }
    if (user.vk_link) {
      socials.push({class: styles.vk, link: user.vk_link,
      alt: "vkontakte link", title: "Follow on vkontakte"})
    }
    if (user.instagram_link) {
      socials.push({class: styles.insta, link: user.instagram_link,
      alt: "instagram link", title: "Follow on instagram"})
    }
    
    // we return null if no socials links
    if (socials.length === 0) return null

    
    return (
      <ul
        className={styles.social_icons}
      >
          {socials.map(social => 
            (<li
                key={social.class}
              ><a
               title={social.title}
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
        className={styles.user_detail}
      >
          <img
            src={BASE_URL + 'media/' + this.props.selected_user.avatar}
            alt={`${this.props.selected_user.username}'s avatar`}
          />
          <h1>{this.props.selected_user.username}</h1>
          <hr />

          {this.getEditButton()}
          <UserWebsite
            website={this.props.selected_user.website}
          />
          <UserSocialsLinks
            user={this.props.selected_user}
          />
      </article>
    )
  }
}


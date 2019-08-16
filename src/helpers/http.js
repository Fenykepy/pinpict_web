import fetch from 'isomorphic-fetch'
import { getCookie } from 'helpers/cookieManager'

import settings from 'photobook_config'

let base_url = settings.base_url


/*
 * A wrapper arround fetch.
 * to set default headers
 * and some helper methods.
 */

class Fetch {

  constructor() {
    this.default_headers = {
      'Accept': 'application/json'
    }
  }

  setAuthorization(headers) {
    let access_token = getCookie('access_token')
    if (access_token) {
      return Object.assign({},
        headers,
        {'Authorization': 'Bearer ' + access_token}
      )
    }
    return headers
  }

  setDefaultHeaders(headers={}) {
    headers = Object.assign({},
        this.default_headers,
        this.setAuthorization(headers)
    )
    return new Headers(headers)
  }

  checkStatus(response) {
    /*if (response.status === 401) {
      // TODO dispatch refresh token
      console.log(response)
    }*/
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      let error = new Error(response.status)
      error.response = response
      throw error
    }
  }

  get(url, headers={}) {
    return fetch(base_url + url,
        {
          method: "GET",
          headers: this.setDefaultHeaders(headers)
        })
        .then(this.checkStatus)
        .then(response => 
          response.json()
        )
  }

  post(url, headers={}, body) {
    return fetch(base_url + url,
        {
          method: "POST",
          headers: new Headers(this.setAuthorization(headers)),
          body: body
        })
        .then(this.checkStatus)
        .then(response =>
          response.json()
        )
  }

  patch(url, headers={}, body) {
    return fetch(base_url + url,
        {
          method: "PATCH",
          headers: new Headers(this.setAuthorization(headers)),
          body: body
        })
        .then(this.checkStatus)
        .then(response =>
          response.json()
        )
  }

  delete(url, headers={}) {
    return fetch(base_url + url,
        {
          method: "DELETE",
          headers: this.setDefaultHeaders(headers)
        })
        .then(this.checkStatus)
  }
}


export default new Fetch()


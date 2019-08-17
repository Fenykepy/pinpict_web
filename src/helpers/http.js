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

  async get(url, headers={}) {
    let response = await fetch(base_url + url,
        {
          method: "GET",
          headers: this.setDefaultHeaders(headers)
        })
    response = this.checkStatus(response)
    return await response.json()
  }

  async post(url, headers={}, body) {
    let response = await fetch(base_url + url,
        {
          method: "POST",
          headers: new Headers(this.setAuthorization(headers)),
          body: body
        })
    response = this.checkStatus(response)
    return await response.json()
  }

  async patch(url, headers={}, body) {
    let response = await fetch(base_url + url,
        {
          method: "PATCH",
          headers: new Headers(this.setAuthorization(headers)),
          body: body
        })
    response = this.checkStatus(response)
    return await response.json()
  }

  async delete(url, headers={}) {
    let response = await fetch(base_url + url,
        {
          method: "DELETE",
          headers: this.setDefaultHeaders(headers)
        })
      return this.checkStatus(response)
  }
}


export default new Fetch()


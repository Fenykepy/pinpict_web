import * as types from './actionsTypes'

import Fetch from 'helpers/http'

// Fetching pictures
function requestPictures() {
  return {
    type: types.REQUEST_PICTURES,
  }
}

function requestPicturesSuccess() {
  return {
    type: types.REQUEST_PICTURES_SUCCESS,
  }
}


function requestPicturesFailure(errors) {
  return {
    type: types.REQUEST_PICTURES_FAILURE,
    errors
  }
}


function addPicture(picture) {
  return {
    type: types.ADD_PICTURE,
    sha1: picture.sha1,
    picture,
  }
}


function fetchPictures() {
  return function(dispatch) {
    // start request
    dispatch(requestPictures())

    // return a promise
    return Fetch.get('api/librairy/picture/')
    .then(json => {
      dispatch(requestPicturesSuccess())
      json.forEach((picture) =>
        dispatch(addPicture(picture))
      )
    })
    .catch(error => {
      error.response.json().then(json => {
        // store error in state
        dispatch(requestPicturesFailure(json))
        throw json
      })
    })
  }
}


function shouldFetchPictures(state) {
  const pictures = state.librairy.pictures
  if (! pictures) return true
  if (pictures.is_fetching || pictures.fetched) return false
  return true
}


export function fetchPicturesIfNeeded() {
  return (dispatch, getState) => {
    if ( shouldFetchPictures(getState()) )  {
      return dispatch(fetchPictures())
    }
    // else return a resolved promise
    return new Promise((resolve, reject) => resolve())
  }
}


// Fetching albums
function requestAlbums() {
  return {
    type: types.REQUEST_ALBUMS,
  }
}

function requestAlbumsSuccess() {
  return {
    type: types.REQUEST_ALBUMS_SUCCESS,
  }
}


function requestAlbumsFailure(errors) {
  return {
    type: types.REQUEST_ALBUMS_FAILURE,
    errors
  }
}


function addAlbum(album) {
  return {
    type: types.ADD_ALBUM,
    slug: album.slug,
    album,
  }
}


function fetchAlbums() {
  return function(dispatch) {
    // start request
    dispatch(requestAlbums())

    // return a promise
    return Fetch.get('api/librairy/album/')
    .then(json => {
      dispatch(requestAlbumsSuccess())
      json.forEach((album) =>
        dispatch(addAlbum(album))
      )
    })
    .catch(error => {
      error.response.json().then(json => {
        // store error in state
        dispatch(requestAlbumsFailure(json))
        throw json
      })
    })
  }
}


function shouldFetchAlbums(state) {
  const albums = state.librairy.albums
  if (! albums) return true
  if (albums.is_fetching || albums.fetched) return false
  return true
}


export function fetchAlbumsIfNeeded() {
  return (dispatch, getState) => {
    if ( shouldFetchAlbums(getState()) )  {
      return dispatch(fetchAlbums())
    }
    // else return a resolved promise
    return new Promise((resolve, reject) => resolve())
  }
}











// Fetching tags


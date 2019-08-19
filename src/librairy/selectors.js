import {
  createSelector,
  createStructuredSelector
} from 'reselect'

// Get selected album's slug
const selectedAlbumSelector = state => state.navigation.album

// Get all picture's object
const picturesSelector = state => state.librairy.pictures

// Get all picture's ordering array
const picturesOrderSelector = state => state.librairy.pictures.order

// Get all albums's object
const albumsSelector = state => state.librairy.albums

// Transforms array of all's sha1 in array of pictures' objects
const picturesArraySelector = createSelector(
  picturesSelector,
  (pictures) => pictures.order.map(sha1 => pictures[sha1])
)

// Transforms array of albums' slugs in array of albums' objects
const albumsArraySelector = createSelector(
  albumsSelector,
  (albums) => albums.order.map(slug => albums[slug])
)

// Get selected albums pictures' objects
const albumPicturesSelector = createSelector(
  albumsSelector, picturesSelector, selectedAlbumSelector,
  (albums, pictures, slug) => {
    if (slug) {
     return albums[slug].pictures.map(sha1 => pictures[sha1])
    }
    return []
  }
)

// Get selected album object from is's slug
const albumSelector = createSelector(
  albumsSelector, selectedAlbumSelector,
  (albums, slug) => {
    if (slug) {
      return albums[slug]
    }
    return {}
  }
)

// Get album selected picture's sha1
const albumSelectedPictureSha1Selector = state => state.navigation.album_selected

// Get album selected picture's object
const albumSelectedPictureObjectSelector = createSelector(
  albumSelectedPictureSha1Selector, picturesSelector,
  (sha1, pictures) => {
    if (sha1) return pictures[sha1]
    return {}
  }
)

// Get all pictures selected picture's sha1
const allSelectedPictureSha1Selector = state => state.navigation.all_selected

// Set all pictures selected picture's object
const allSelectedPictureObjectSelector = createSelector(
  allSelectedPictureSha1Selector, picturesSelector,
  (sha1, pictures) => {
    if (sha1) return pictures[sha1]
    return {}
  }
)


export const librairySelector = createStructuredSelector({
  pictures: picturesArraySelector,
  pictures_order: picturesOrderSelector,
  albums: albumsArraySelector,
  album: albumSelector,
  album_pictures: albumPicturesSelector,
  all_selected: allSelectedPictureObjectSelector,
  album_selected: albumSelectedPictureObjectSelector,
})

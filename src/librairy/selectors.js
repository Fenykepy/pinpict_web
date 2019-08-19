import {
  createSelector,
  createStructuredSelector
} from 'reselect'

const selectedAlbumSelector = state => state.navigation.album

const picturesSelector = state => state.librairy.pictures
const picturesOrderSelector = state => state.librairy.pictures.order
const albumsSelector = state => state.librairy.albums

const picturesArraySelector = createSelector(
  picturesSelector,
  (pictures) => pictures.order.map(sha1 => pictures[sha1])
)

const albumsArraySelector = createSelector(
  albumsSelector,
  (albums) => albums.order.map(slug => albums[slug])
)

const albumPicturesSelector = createSelector(
  albumsSelector, picturesSelector, selectedAlbumSelector,
  (albums, pictures, slug) => {
    if (slug) {
     return albums[slug].pictures.map(sha1 => pictures[sha1])
    }
    return []
  }
)

const albumSelector = createSelector(
  albumsSelector, selectedAlbumSelector,
  (albums, slug) => {
    if (slug) {
      return albums[slug]
    }
    return {}
  }
)

export const librairySelector = createStructuredSelector({
  pictures: picturesArraySelector,
  pictures_order: picturesOrderSelector,
  albums: albumsArraySelector,
  album: albumSelector,
  album_pictures: albumPicturesSelector,
})

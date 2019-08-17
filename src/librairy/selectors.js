import {
  createSelector,
  createStructuredSelector
} from 'reselect'

const picturesSelector = state => state.librairy.pictures
const albumsSelector = state => state.librairy.albums

const picturesArraySelector = createSelector(
  picturesSelector,
  (pictures) => pictures.order.map(sha1 => pictures[sha1])
)

const albumsArraySelector = createSelector(
  albumsSelector,
  (albums) => albums.order.map(slug => albums[slug])
)

export const librairySelector = createStructuredSelector({
  pictures: picturesArraySelector,
  albums: albumsArraySelector,
})

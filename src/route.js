

function onRoot(nextState, replace) {
  // if user is authenticated, redirect to pictures list
  // else redirect to login page
}

export default () => {
  return (
    <Route>
      <Route path="/" component={App} onEnter={onRoot}>
        <Route path="/signin(/)" component={Login} />
        <Route path="/:mail/pictures(/)" component={PicturesList}>
          <Route path="/:mail/pictures/:sha1(/)" component={PictureDetail} />
        </Route>
        <Route path="/:mail/albums(/)" component={AlbumsList}>
          <Route path="/:mail/albums/:slug(/)" component={AlbumDetail}>
            <Route path="/:mail/albums/:slug/pictures/:sha1(/)" component={PictureDetail} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
}



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


/* URL's */

/*
   "/"                        Last public pin's list.
   "/login/?next=<redirect>"  Login form, redirect to "/<userslug>" after if no next query string
   "/<userslug>/"             User board list
   "/<userslug>/<boardslug>/" Board pin's list
   "/<userslug>/pins/"        User pins list
   "/<userslug>/followers/"   User followers list
   "/<userslug>/following/"   User following list
   "/pin/<pin_id>/"           Pin detail view
   "/pin/find/<tag>/"         Pins list filtered by tag
   "/pin/scan/?url=<url>"     Scan url for images
*/


/* Modal navigation */

/*
   Board creation
   Board edition
   Pin creation
   Pin edition
   Profile edition
*/

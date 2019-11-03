
/* URL's */

/*
   "/"                        
      user is authenticated: Last public pin's list.
      user is not authenticated: redirect to /login.
   "/login/?next=<redirect>"              Login form, redirect to "/<userslug>" after if no next query string
   "/<userslug>/"                         User board list
   "/<userslug>/<boardslug>/"             Board pin's list
   "/<userslug>/<boardslug>/pin/<pin_id>" Board pin's list with pin in lightbox
   "/<userslug>/pins/"                    User pins list
   "/<userslug>/pins/pin/<pin_id>"        User pins list with pin in lightbox
   "/<userslug>/followers/"   User followers list
   "/<userslug>/following/"   User following list
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


/* Components hierarchy */

/*

   <App>
    <Header>
    <Login>

   </App>

*/

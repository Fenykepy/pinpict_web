
/* URL's */

/*
   "/"                        
      user is authenticated: Last public pin's list.
      user is not authenticated: redirect to /login.
OK   "/login/?next=<redirect>"              Login form, redirect to "/<userslug>" after if no next query string
OK   "/<userslug>/"                         User board list
OK   "/<userslug>/<boardslug>/"             Board pin's list
OK   "/pin/<pin_id>"                        Pin detail
   "/<userslug>/pins/"                    User pins list
   "/<userslug>/followers/"   User followers list
   "/<userslug>/following/"   User following list
   "/pin/find/<tag>/"         Pins list filtered by tag
   "/pin/from/"               Form to choose to upload pin or to scrap it from webpage
   "/pin/from/computer/"      Form to upload pin from computer
   "/pin/from/webpage/"       Form to choose webpage to scan
   "/pin/find/?url=<url>"     Scan url for images
   "/pin/create/"             Create a pin form (end of process)
*/




/* Modal navigation */

/*
OK   Board creation
   Board edition
   Pin creation -> no to harsh
   Pin edition
   Profile edition
*/


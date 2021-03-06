# liri-node-app

-	Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
-	Give a high-level overview of how the app is organized
-	Give start-to-finish instructions on how to run the app
-	Include screenshots, gifs or videos of the app functioning
-	Contain a link to a deployed version of the app
-	Clearly list the technologies used in the app
-	State your role in the app development


# LIRI Functionality

LIRI is a terminal/bash based node application that takes in commands and gives the user data based off the following callback options: 

User must type in the terminal/bash command line: 

node liri.js (OPTION BELOW) "[USER CHOICE]"

-	concert-this
-	spotify-this-song
-	movie-this
-	do-what-it-says

LIRI will respond with information to the user that is received from the API that was utilized via the terminal/bash command line. 

## concert-this: 

This will search for an artist and render information about each concert event to the terminal/bash window.


## spotify-this-song: 

This will show information about the song submitted in your terminal/bash window.


## movie-this: 

![Alt Text](Screenshots/movie-this.gif)

This will use this command to retrieve information about the movie that the user submited in the terminal/bash window.


## do-what-it-says: 

LIRI will use the text from “random.txt” and call on of LIRI’s commands. 


## Technologies Utilized:

* Spotify API
* OMDB API
* Bands In Town API
* Node.js
* Javascript
* NPM packages


## Personal Roles:

-	Structured the layout of the application before writing code.
-	Installed all applicable NPM packages and added Spotify ID/Secret.
-	Tested and executed callback options with results from each API.


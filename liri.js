// NPM libraries.
require("dotenv").config();
var fs = require("fs");
var moment = require("moment");
var axios = require("axios");
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);

// Required variables.
let command = process.argv[2]
let searchTerm = process.argv[3]

fs.appendFile('log.txt', command + ",", function (err) {
    if (err) throw err;
});

switch (command){
    case "concert-this":  
    // Concerts in town.
        searchBands(searchTerm);
        break;
    case "spotify-this-song":  
    // Spotify song.
        spotifySong(searchTerm);
        break;
    case "movie-this":  
    // OMDB for movies.
        movieTitle(searchTerm);
        break;
    case "do-what-it-says":  
    //  Reads commands from a file and excutes the commands above.
        randomFeature();
    break;
}
    
    function searchBands(artist) {
        var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(queryUrl).then(
            function(response) {
                if(response.data[0].venue !=  undefined) {
                    console.log("Event Veunue: " + response.data[0].venue.name);
                    console.log("Event Location: " + response.data[0].venue.city);
                    var eventDateTime = moment(response.data[0].datetime);
                    console.log("Event Date & Time: " + eventDateTime.format("dddd, MMMM Do YYYY"));
                }
                else {
                    console.log("No results found. ");
                }
            }
        ).catch(function (error) {
            console.log (error);
      });
    }

    function spotifySong(song) {
        spotify
        .search({ type: 'track', query: song })
        .then(function(response){
            if (response.tracks.total === 0) {
                errSpotify();
            } else {
                console.log("Artist: " + response.tracks.items[0].artists[0].name);
                console.log("Track: " + response.tracks.items[0].name);
                console.log("Preview URL: " + response.tracks.items[0].preview_url);
                console.log("Album: " + response.tracks.items[0].album.name);
            }
        }).catch(function (error) {  
            console.log(error);
            console.log("No Results found.");
      });
    }

    function errSpotify() {
        spotify
        .search({ type: 'track', query: 'Rose Garden' })
        .then(function(response) {
            for (var i=0;i < response.tracks.items.length; i++) {
                if (response.tracks.items[i].artists[0].name === "Kupla") {
                    console.log("Artist: " + response.tracks.items[i].artists[0].name);
                    console.log("Track: " + response.tracks.items[i].name);
                    console.log("Preview URL: " + response.tracks.items[i].preview_url);
                    console.log("Album: " + response.tracks.items[i].album.name);
                    i = response.tracks.items.length;
                }
            }
        }).catch(function (error) {  
            console.log(error);
            console.log("No Results found. ");
      });
    }

    function movieTitle(movie) {
        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&apikey=trilogy").then(
            function(response) {
                
                if (response.data.Title != undefined) {
                    console.log("Title: " + response.data.Title);
                    console.log("Year: " + response.data.Year);
                    console.log("imdbRating:: " + response.data.imdbRating);
                    console.log("Title: " + response.data.Title);
                    console.log("Country:: " + response.data.Country);
                    console.log("Language:: " + response.data.Language);
                    console.log("Plot: " + response.data.Plot);
                    console.log("Actors: " + response.data.Actors);
                    console.log("RottenTomatoes: " + response.data.tomatoRating);
                } 
                else {
                    movieTitle("Gone Girl");
                }
            }
             
        ).catch(function (error) {  
            console.log(error);
            console.log("No Results found. ");
      });
    }

    function randomFeature() {
        fs.readFile("random.txt", "utf8", function(error, data) {
            var dataArr = data.split(",");
            spotifySong(dataArr[1])
          
            if (error) {
              return console.log(error);
            }
        });
    }
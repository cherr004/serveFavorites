var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("It works!");
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/":
    return displayhomePage(path, req, res);

  case "/contacts":
    return displayContacts(path, req, res);

    case "/movies":
    return displayMovies(path, req, res);

  case "/music":
    return displayMusic(path, req, res);

  default:
    return display404(path, req, res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayhomePage(url, req, res) {

    // Here we use the fs package to read our homePage.html file
 fs.readFile(__dirname + "/homePage.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// When someone visits the "http://localhost:8080/contacts" path, this function is run.
function displayContacts(url, req, res) {
     // Here we use the fs package to read our homePage.html file
     fs.readFile(__dirname + "/contacts.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
    }

// When someone visits the "http://localhost:8080/movies" path, this function is run.
function displayMovies(url, req, res) {
    // Here we use the fs package to read our homePage.html file
    fs.readFile(__dirname + "/movies.html", function(err, data) {

       // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
       // an html file.
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end(data);
     });
   }

   // When someone visits the "http://localhost:8080/movies" path, this function is run.
function displayMusic(url, req, res) {
    // Here we use the fs package to read our homePage.html file
    fs.readFile(__dirname + "/music.html", function(err, data) {

       // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
       // an html file.
       res.writeHead(200, { "Content-Type": "text/html" });
       res.end(data);
     });
   }

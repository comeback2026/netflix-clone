// Load the Express module
var express = require('express');
var app = express();

// Set the port for the app to listen on
// Use environment variable PORT if provided, otherwise default to 3000
var port = process.env.PORT || 3000;

// Serve static files from the "public" directory
// Any files in /public (like HTML, CSS, JS) can be accessed directly
app.use(express.static(__dirname + '/public'));

// Define route for root path '/'
app.get('/', function(request, response) {
  response.send('Hello World!'); // Sends simple text to browser
});

// Start the server
// Listen on 0.0.0.0 so Docker can forward external traffic to the container
// Only one app.listen() is needed
app.listen(port, '0.0.0.0', function() {
  console.log("Node app is running at port " + port);
});

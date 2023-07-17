// Create a web server that, when a GET request is made to /comments, reads the
// comments.json file, parses it to JSON, and returns the object to the client.
// Add appropriate response headers to tell the client to cache the results for
// 10 seconds, and to allow AJAX requests from any domain.

var http = require('http');
var fs = require('fs');
var port = 8080;

var server = http.createServer(function(request, response) {
  var url = request.url;

  if (url === '/comments') {
    fs.readFile('comments.json', function(error, data) {
      if (error) {
        console.log(error);
      } else {
        response.writeHead(200, {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        });
        response.end(data);
      }
    });
  } else {
    response.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    response.end('404 File Not Found');
  }
});

server.listen(port, function() {
  console.log('Listening on port ' + port);
});
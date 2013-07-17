var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var htmlfile = "index.html";
// var infile = "index.html";
// var buffer = fs.readFileSync(infile);
// var text = buffer.toString();

app.get('/', function(request, response) {
  var html = fs.readFileSync(htmlfile).toString();
  response.send(html);
});

var port = process.env.PORT || 8080; //5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
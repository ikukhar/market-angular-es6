var express = require('express');
var morgan = require('morgan');
var app = express();

// app.use(express.logger('dev'));
app.use(express.static(__dirname + "/dist"));
app.use(morgan('dev'));

app.get('*', function(req, res) {
  res.sendfile('./dist/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

var port = process.env.PORT || 5000;
app.listen(port);
console.log("App listening on port "+port);

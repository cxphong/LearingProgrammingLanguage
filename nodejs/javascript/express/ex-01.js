var express = require('express')
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('GET')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST')
})

var server = app.listen(8081, function () {
  // var host = server.address().address
  // var port = server.address().port
  // console.log("Example app listening at http://%s:%s", host, port)
})

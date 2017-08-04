// Parse parameter
var express = require('express')
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', function (req, res) {
  console.log(req.body);
  console.log(req.body.userId);
  console.log(req.body.name);

  res.send(req.body)
})

var server = app.listen(8081, function () {
})

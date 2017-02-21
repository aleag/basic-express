var express = require('express');
var app = express();
var path = require('path');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware 1
app.use(express.static('public'));

app.get('/', function (req, res) {

  var ip_ = req.ip;
  var browser_ = req.headers['user-agent'];
  var hostName = req.hostname;

  res.render('hello', { ip: ip_, browser: browser_, hostname: hostName});
});

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);
});

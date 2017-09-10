var _ = require('lodash');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
// var reactRender = require('react-render');
var render = require('../lib/react/render');

var ADDRESS = '127.0.0.1';
var PORT = 9009;

var app = express();
var server = http.Server(app);

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.end('react render server');
});

app.post('/render', function (req, res) {
  // reactRender(req.body, function (err, markup) {
  //   var error = null;
  //   if (err) {
  //     error = {
  //       type: err.constructor.name,
  //       message: err.message,
  //       stack: err.stack
  //     };
  //   }
  //   res.json({
  //     error: error,
  //     markup: markup
  //   });
  // });

  render(req.body)
    .then(function (markup) {
      res.json({
        markup: markup
      });
    })
    .catch(function (err) {
      var error = {
        type: err.constructor.name,
        message: err.message,
        stack: err.stack
      };
      res.json({
        error: error
      });
    });
});

server.listen(PORT, ADDRESS, function () {
  console.log('react render server listening at http://' + ADDRESS + ':' + PORT);
});

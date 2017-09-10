var Promise = require('bluebird');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

require('babel-core/register');

module.exports = function(file, props) {
  var cls = require(file);
  var element = React.createElement(cls.default || cls, props);

  return new Promise(function(resolve, reject) {
    try {
      resolve(ReactDOMServer.renderToStaticMarkup(element));
    } catch (e) {
      reject(e);
    }
  });
};

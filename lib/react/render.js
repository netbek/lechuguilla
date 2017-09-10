var Promise = require('bluebird');
var renderMount = require('./render-mount');
var renderStatic = require('./render-static');

module.exports = function (opts) {
  var file = opts.path;
  var props = opts.props;

  if (!props && opts.serializedProps) {
    try {
      props = JSON.parse(opts.serializedProps);
    }
    catch (err) {
      return Promise.reject(err);
    }
  }

  return renderMount(file, props, 1000);
  // return renderStatic(file, props);
};

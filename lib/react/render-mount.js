var mount = require('enzyme').mount;
var Promise = require('bluebird');
var React = require('react');

require('babel-core/register');

// https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md
var JSDOM = require('jsdom').JSDOM;
var jsdom = new JSDOM('<!doctype html><html><body></body></html>');
var window = jsdom.window;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src).filter(prop => typeof target[prop] === 'undefined').map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
copyProps(window, global);

module.exports = function(file, props, delay) {
  var cls = require(file);
  var element = React.createElement(cls.default || cls, props);
  var wrapper = mount(element);

  return new Promise(function(resolve, reject) {
    try {
      setTimeout(function() {
        resolve(wrapper.html());
      }, delay || 0);
    } catch (e) {
      reject(e);
    }
  });
};

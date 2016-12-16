// This file isn't transpiled, so must use CommonJS and ES5
process.env.NODE_ENV = 'test';

// register Babel to transpile before our tests run
require('babel-register')();

// Configure JSDOM and set global variables
// to simulate a browser environment for tests.
var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};

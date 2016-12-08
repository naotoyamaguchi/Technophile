// jshint esversion: 6

var Watch = require('./Watch');
var Tablet = require('./Tablet');
var extend = require('./extend');



function SmartWatch(){
  Watch.call(this, null);
}

SmartWatch.prototype = Object.create(Watch.prototype);
extend(SmartWatch, Tablet);


module.exports = SmartWatch;
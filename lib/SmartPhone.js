// jshint esversion:6

var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');
var extend = require('./extend');


function SmartPhone(phoneNumber){
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}


SmartPhone.prototype = Object.create(Phone.prototype);
extend(SmartPhone, Tablet);
extend(SmartPhone, GameConsole);
extend(SmartPhone, WebBrowser);

module.exports = SmartPhone;
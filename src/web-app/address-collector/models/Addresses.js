'use strict';
var Bb = require('backbone');
var Address = require('./Address');

module.exports = Bb.Collection.extend({
  url: 'api/address/',
  model: Address
});

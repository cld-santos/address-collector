'use strict';
var $ = require('jquery');
var Bb = require('backbone');
var Addresses = require('../models/Addresses');

module.exports = Bb.View.extend({
  initialize: function(collection){
    this.collection = collection;
    $('#clean-address').on('click', this.cleanAddresses.bind(this));
  },
  cleanAddresses: function(event) {
    var self = this;
    $.ajax('clean_addresses').done(function(data, result, xhr){
      self.collection.reset();
    });
  }

})
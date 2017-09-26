'use strict';
var $ = require('jquery');
var Bb = require('backbone');
var Addresses = require('../models/Addresses');

module.exports = Bb.View.extend({
  initialize: function(){
    this.collection = new Addresses();
    this.collection.on('add', this.onAdd, this);
    this.collection.on('reset', this.onReset, this);
    this.$list = $('.list-address');
  },
  render: function() {
    this.collection.fetch();
  },
  onAdd: function(model, collection, options) {
    this.$list.append('<li>' + model.get('name') + '</li>');
  },
  onReset: function(collection, options) {
    this.$list.html('');
  }

})
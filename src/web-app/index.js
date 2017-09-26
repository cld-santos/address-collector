'use strict';
var MapView = require('./address-collector/Map');
var ListAddress = require('./address-collector/views/ListAddress');
var CleanAddress = require('./address-collector/views/CleanAddress');

var map = new MapView();
var listAddress = new ListAddress();

map.collection = listAddress.collection;
map.render();
listAddress.render();

var cleanAddress = new CleanAddress(listAddress.collection);
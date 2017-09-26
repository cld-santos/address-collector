require('leaflet/dist/leaflet.css');
var L = require('leaflet');
var Bb = require('backbone');
var Address = require('./models/Address');
var Geocoder = require('./Geocoder');

module.exports = Backbone.View.extend({
  initialize: function(){
    this.geocoder = new Geocoder();
    this.icon = L.icon({
        iconUrl: 'static/assets/marker.png',
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -32],
    });    
  },
  render: function() {
    this.map = L.map('map').setView([-23.30211, -45.96664], 16);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.map.on('click', this.onMapClick.bind(this));
  },
  onMapClick: function(event) {
    var coords = event.latlng;
    var onSuccess = function( success, statusText, jqXHR){
      if (success.osm_type === 'way'){
        var address = new Address({
          lat: coords.lat.toFixed(6), 
          lon: coords.lng.toFixed(6),
          name: success.address.road
        });
        address.save();
        this.collection.add(address);
        L.marker([coords.lat, coords.lng], {icon:this.icon}).addTo(this.map)
          .bindPopup(address.get('name'))
          .openPopup();
      }
    };
    this.geocoder.reverse(coords.lat, coords.lng).done(onSuccess.bind(this));
  },
});

require('leaflet/dist/leaflet.css');
var L = require('leaflet');
var Bb = require('backbone');

module.exports = Backbone.View.extend({
  render: function() {
    this.map = L.map('map').setView([-23.30211, -45.96664], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.map.on('click', this.onMapClick.bind(this));
  },
  onMapClick: function(event) {
    var coords = event.latlng;
    L.marker([coords.lat, coords.lng]).addTo(this.map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    console.log(event.latlng);
  }
});

var $ = require('jquery');

var Geocoder = function(){
  this.reverse = function(lat, lon){
    return $.ajax('http://nominatim.openstreetmap.org/reverse', {
      data: {
        'format': 'json',
        'lat': lat,
        'lon': lon,
        'zoom': 18
      }
    });
  };
};

module.exports = Geocoder;

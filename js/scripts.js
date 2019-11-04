// Business Logic for Destinations //

function DestinationList() {
  this.locations = []
}

DestinationList.prototype.addLocation = function(location) {
  this.locations.push(location);
}

// Business logic for Towns //

function Location(state, city, season) {
  this.state = state,
  this.city = city,
  this.season = season
}

Location.prototype.locationInfo = function() {
  return this.state + " " + this.city;
}

var destinationList = new DestinationList();
var location1 = new Location("Texas", "Austin", "Fall");
var location2 = new Location("California", "Leucadia", "Winter");
destinationList.addLocation(location);
destinationList.addLocation(location2);

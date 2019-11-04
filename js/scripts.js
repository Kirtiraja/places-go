// Business Logic for Destinations //

function DestinationList() {
  this.locations = []
}

DestinationList.prototype.addLocation = function(location) {
  this.locations.push(location);
}

// Business logic for Towns //

function Location(state, city, season, food, activity) {
  this.state = state,
  this.city = city,
  this.season = season,
  this.food = food,
  this.activity = activity

}

Location.prototype.locationInfo = function() {
  return this.state + " " + this.season + " " + this.food + " " + this.activity;
}

var destinationList = new DestinationList();

var austin = new Location("Texas", "Austin", "Fall", ["seafood", "tacos"], ["cycling", "bat-viewing"]);

var leucadia = new Location("California", "Leucadia", "Winter", ["burritos", "vegan"],"surfing", "SUP");

destinationList.addLocation(boulder);
destinationList.addLocation(austin);
destinationList.addLocation(leucadia);
var boulder = new Location("Colorado",  "Boulder", "Summer",["italian", "burmese"], ["trail-running", "skiing"]);

// Front End Logic Goes Here:

$(document).ready(function() {
  console.log("Click1");
  $("#austin").click(function(event) {
    var output = austin.locationInfo();
    $("#austinShow").text(output);

    });

    console.log("Click2");
    $("#leucadia").click(function(event) {
      var output = leucadia.locationInfo();
      $("#leucadiaShow").text(output);

});
console.log("Click3");
$("#boulder").click(function(event) {
  var output = boulder.locationInfo();
  $("#boulderShow").text(output);
});
});

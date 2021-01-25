function Place(cityName, stateName, countryName) {
  this.cityName = cityName;
  this.stateName = stateName;
  this.countryName = countryName;
  this.landmarks = [];
  this.notes = '';
}

Place.prototype.fullDescription = function() {
  return this.cityName + " " + this.stateName + ", " + this.countryName + ", " + this.timeOfYear + ", " + this.landmarks + ", " + this.notes;
}  

Place.prototype.addTimeOfYear = function(season) {
  this.timeOfYear = season;
}

Place.prototype.addNotes = function(str) {
  this.notes += " " + str;
}

Place.prototype.addLandmark = function(feature) {
  this.landmarks.push(feature);
}

// UI Logic: 
// Display those properties when a user clicks on a place's name.

let Place = new Place();
$(document).read
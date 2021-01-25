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

// let Place = new Place();

$("document").ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    const inputtedCityName = $("input#city-entry").val();
    const inputtedStateName = $("input#state-entry").val();
    const inputtedCountryName = $("input#country-entry").val();
    let newPlace = new Place(inputtedCityName, inputtedStateName, inputtedCountryName,);
    newPlace.addTimeOfYear($("input#season-entry").val());
    newPlace.addNotes($("input#note-entry").val());
    newPlace.addLandmark($("input#landmark-entry").val());
    $("#show-place").slideDown();
    $(".clickable").prepend(`<li>${newPlace.cityName}, ${newPlace.countryName}</li>`).once();
    $("span.city").text(newPlace.cityName);
    $("span.state").text(newPlace.stateName);
    $("span.country").text(newPlace.countryName);
    
  });
});
# _Travel Diary_

## Created By
Alan Call & Tyler Sinks
_initially created from scratch the twenty-fifth of January, 2021_

### What **IS** this Travel Diary?
_Hoping to get a little practice manipulating objects and the prototype chain of JavaScript, we created this project in response to a prompt at Epicodus. The general idea is to allow a visitor to the page to input details about places she has traveled (and work with them behind the scenes using JavaScript)._

### Specs

Describe: Place()
Test: "It will act as a constructor and return a new instance of place where its type is 'object.' "
Expect(typeof new Place()).toEqual(object)

Test: "It will store cityName on new instances of Place."
Code: const myNewPlace = new Place("Toronto");
Expect(myNewPlace.cityName).toEqual("Toronto")

Test: "It will store stateName on new instance of Place."
Code: const myNewPlace2 = new Place("Ontario");
Expect(myNewPlace2.stateName).toEqual("Ontario")

Test: "It will store countryName on new instance of Place."
Code: const myNewPlaceC = new Place("Canada");
Expect(myNewPlaceC.countryName).toEqual("Canada")

Describe: addTimeOfYear()
Test: "It will store recommended time of year for visits on new instance of Place."
Code: const myNewPlace14 = new Place("Fall");
Expect(myNewPlace14.timeOfYear).toEqual("Fall")

Describe: addNotes()
Test: "It will store notes from the visit as a string on new instance of Place."
Code: const myNewPlace15 = new Place("was way too cold during our last visit in January");
Expect(myNewPlace15.notes).toEqual("was way too cold during our last visit in January")

Describe: addLandmark()
Test: "It will store landmarks in an array on new instance of Place."
Code: const myNewPlace7 = new Place("Toronto City Hall", "CN Tower", "Scotia Bank Arena");
Expect(myNewPlace7.landmarks).toEqual(["Toronto City Hall", "CN Tower", "Scotia Bank Arena"])

## Technologies Used

* _html, css, JavaScript_
* _jQuery, Bootstrap_
* _VS Code_
* _git, GitHub, iTerm2_

## Description
_This project allows a user to store and view places they've been by entering them into a form. Stretch goals for the project include the ability to add pictures to the page and allow the user to toggle the display of details by clicking on the name of the place on the page._

## Setup/Installation Requirements
To download this project, view all of its contents, render the the whole thing in your browser to take it, and to tinker with it on your own machine, follow these steps:
1. Copy this https link to the repository: `https://github.com/sinkstyt/places-journal`
2. Launch your command line or Terminal application
3. Navigate to the preferred destination folder. For example, type each of these followed by pressing <kbd>ENTER</kdb>:
4. `$ cd ~`
5. `$ mkdir travel-diary`
6. `$ cd travel-diary`
7. `$ git clone https://github.com/sinkstyt/places-journal` (Here's where you could paste this https link copied from step 1)

> > From here you have two options:
#### Examine the files from within your text editor of choice (the command "code" should launch VS Code, but this may not be the case on your machine):
8. from the same directory to which you have just cloned down a copy of the whole thing from GitHub (in step 7), call:
`$ code .`

#### Render the page in a web browser to take the survey:
First copy to your clipboard the full local path to this project's folder. Thus, from within the directory to which you have cloned the project, call
8. `$ pwd`
_something like the following will be returned in your terminal:_
> `/Users/{YOUR_USERNAME}/Desktop/Epicodus/travel-diary`
9. Paste this file path into the address bar of a web browser but with the following added to the very end of the full address:
`/index.html`
> > So the whole address to be rendered by your browser might look like:
`/Users/{YOUR_USERNAME}/Desktop/Epicodus/travel-diary/index.html`

## Known Bugs

* _This project has no user interface built yet_

## License
_This project is offered under The Open Software License 3.0 (OSL-3.0)_<br>
_The author would love to hear of suggestions for this and any of his other works or works which include him as a contributor. Please do not hesitate to contact me._<br>

## Contact Information

_This repository's author uses **sinkstyt** as username on GitHub_<br>
_Email address: tyler.sinks@gmail.com_<br>
_pronouns he/him/they/them_<br>
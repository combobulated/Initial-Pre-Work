// 86 Delete Properties from a JavaScript Object
// source learn.freecodecamp.org

/*  "delete properties from object with delete keyword "

We can also delete properties from objects like this:

delete ourDog.bark;


---- Assignments ---

Delete the "tails" property from myDog.
You may use either dot or bracket notation.

------ Commits ---
Delete property from object myDog

Deletes the "tails" property from myDog using dot notation
ie delete myDog.tails

------------------*/
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.
delete myDog.tails;

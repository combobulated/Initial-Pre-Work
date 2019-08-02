// 85 Add New Properties to a JavaScript Object
// source: learn.freecodecamp.org
/*
        "Add new property to an object"
You can add new properties to existing JavaScript objects the same way
 you would modify them.

Here's how we would add a "bark" property to ourDog:

ourDog.bark = "bow-wow";

or

ourDog["bark"] = "bow-wow";

Now when we evaluate ourDog.bark, we'll get his bark, "bow-wow".

--------- Assignment ------
Add a "bark" property to myDog and set it to a dog sound, such as "woof".
You may use either dot or bracket notation.

-------- Commits -------
Add new property to an object

Adds a "bark" property to object myDog and
sets it to a dog sound, "woof".  Uses dot notation.

------------------------*
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

myDog.bark = "woof";

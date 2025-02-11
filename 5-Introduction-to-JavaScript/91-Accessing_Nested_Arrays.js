// 91 Accessing Nested Arrays
// source: learn.freecodecamp.org

/* Access nested arrays same as objects

As we have seen in earlier examples, objects can contain both nested objects
and nested arrays. Similar to accessing nested objects, Array bracket notation
can be chained to access nested arrays.

Here is an example of how to access a nested array:

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"

---- Assignment ----
Retrieve the second tree from the variable myPlants using object
 dot and array bracket notation.

 --------- Commits ---
 Access nested array within Object

 Retrieves the second tree from the variable myPlants using object
 ot and array bracket notation.

-------------------------*/
// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

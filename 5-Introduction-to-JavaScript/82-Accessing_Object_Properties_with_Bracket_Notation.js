// 82 Accessing Object Properties with Bracket Notation
// source: learn.freecodecamp.org

/* Access object properties with Bracket Notation

The second way to access the properties of an object is bracket notation ([]).
 If the property of the object you are trying to access has a space in its name,
 you will need to use bracket notation.

However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property:

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"]; // USS Enterprise
Note that property names with spaces in them must be in quotes (single or double).

------- Assignment ----
Read the values of the properties "an entree" and "the drink" of testObj
using bracket notation and assign them to entreeValue and
 drinkValue respectively.

---- Commits ---
 Access object properties with Bracket Notation 

 Read the values of the properties "an entree" and "the drink" of testObj
 using bracket notation and assign them to entreeValue and
drinkValue respectively.

  ----------------- */
  // Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

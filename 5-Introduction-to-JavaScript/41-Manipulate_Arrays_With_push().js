// 41 Manipulate Arrays With push()
// source learn.freecodecamp.org

/*  "adding element to an array with .push function"
An easy way to append data to the end of an array
is via the push() function.

.push() takes one or more parameters and "pushes" them
onto the end of the array.

var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]
--- Assignment --
Push ["dog", 3] onto the end of the myArray variable.

--- Commits ---
Add elements to end of myArray with push

ie myArray.push(["dog", 3])
------ */
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);

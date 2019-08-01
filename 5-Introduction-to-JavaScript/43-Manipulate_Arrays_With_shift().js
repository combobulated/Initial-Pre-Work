// 43  Manipulate Arrays With shift()
// source learn.freecodecamp.org
/* "remove first element of array with .shift() "
pop() always removes the last element of an array.
What if you want to remove the first?

That's where .shift() comes in. It works just like .pop(),
except it removes the first element instead of the last.

------ Assignment ----

Use the .shift() function to remove the first item from myArray,
assigning the "shifted off" value to removedFromMyArray.

---- commits ---
Remove first item from myArray using shift() func

Uses the .shift() function to remove the first item from myArray,
assigning the "shifted off" value to removedFromMyArray.
ie var removedFromMyArray= myArray.shift();

--------------*/
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray= myArray.shift();

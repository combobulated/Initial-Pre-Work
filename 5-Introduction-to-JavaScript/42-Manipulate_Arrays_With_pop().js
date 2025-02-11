// 42 Manipulate Arrays With pop()
// source learn.freecodecamp.org

/* "function pop removes last element of array and returns that element"

Another way to change the data in an array is with the .pop() function.

.pop() is used to "pop" a value off of the end of an array. We can store
this "popped off" value by assigning it to a variable. In other words, .pop()
removes the last element from an array and returns that element.

Any type of entry can be "popped" off of an array - numbers, strings,
even nested arrays.

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]

---- Assignment ---
Use the .pop() function to remove the last item from myArray, assigning
the "popped off" value to removedFromMyArray.

--- Commits ---
Use pop() to remove last item from myArray

Uses the .pop() function to remove the last item from myArray,
and assigns
the "popped off" value to removedFromMyArray.
ie var removedFromMyArray =myArray.pop();
--------------*/
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray =myArray.pop();

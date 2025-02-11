//40 Access Multi-Dimensional Arrays With Indexes
// source: learn.freecodecamp.org

/*
One way to think of a multi-dimensional array, is as an array of arrays.
 When you use brackets to access your array, the first set of brackets
 refers to the entries in the outer-most (the first level) array,
 and each additional pair of brackets refers to the next level of entries inside.

Example

var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
Note
There shouldn't be any spaces between the array name and the square brackets,
 like array [0][0] and even this array [0] [0] is not allowed.
 Although JavaScript is able to process this correctly,
 this may confuse other programmers reading your code.

---Assignment ---
Using bracket notation select an element from myArray such that myData
 is equal to 8.

 ---- Commits ----
Acces multidimensional array myArray to return 8

Uses bracket notation to select an element from myArray such that
its value is equal to 8
 ie var myData = myArray[2][1];
 ----- */
 // Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];

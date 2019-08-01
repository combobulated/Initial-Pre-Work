// 39 Modify Array Data With Indexes
// source learn.freecodecamp.org

/*
"arrays are mutable"

Unlike strings, the entries of arrays are mutable and can be changed freely.

Example

var ourArray = [50,40,30];
ourArray[0] = 15; // equals [15,40,30]
Note
There shouldn't be any spaces between the array name and the square brackets, like array [0]. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

---assignment --
Modify the data stored at index 0 of myArray to a value of 45.

--- commits --
Mutable array exercise

Change myArray[0] to 45

-------*/
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];

// Only change code below this line.

myArray[0]=45;

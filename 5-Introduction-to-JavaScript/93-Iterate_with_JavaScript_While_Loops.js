// 93 Iterate with JavaScript While Loops
// source: learn.freecodecamp.org

/* " Iterate using the while loop"

You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a "while" loop because
 it runs "while" a specified condition is true and stops once that condition
 is no longer true.

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
----- Assignment ---
Let's try getting a while loop to work by pushing values to an array.
Push the numbers 0 through 4 to myArray using a while loop.

---- Commits ---
Iterate using the while loop

Uses while loop to push values to an array.  Pushes the numbers
0 through 4 to myArray using a while loop

-------------*/
// Setup
var myArray = [];

// Only change code below this line.

var i = 0;
while(i<5){
  myArray.push(i);
  i++;
}

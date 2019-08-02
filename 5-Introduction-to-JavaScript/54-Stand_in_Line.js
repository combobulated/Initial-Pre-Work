// 54 Stand in Line
// source: learn.freecodecamp.org
/*
"queue, similar to a line where people line up at back, first in line items
are taken from front of queue"

In Computer Science a queue is an abstract Data Structure where items
are kept in order. New items can be added at the back of the queue
 and old items are taken off from the front of the queue.

---- Assignment ---
Write a function nextInLine which takes an array (arr)
and a number (item) as arguments.

Add the number to the end of the array, then remove the first
element of the array.

The nextInLine function should then return the element that was removed.

---- Commits ---
Create queue function nextInLine

Uses .push() to place argument,item, to end of line.
Uses .shift() to remove and return first item of line. ie start of array
------------*
function nextInLine(arr, item) {

  // Your code here

  arr.push(item);   /// places item to end of array (line)
  var firstInLine = arr.shift(); // removes item at start of array (line)


  return firstInLine;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

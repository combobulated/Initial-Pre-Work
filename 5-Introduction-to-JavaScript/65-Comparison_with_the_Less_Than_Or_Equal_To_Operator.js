// 65 Comparison with the Less Than Or Equal To Operator
// source: free.codecamp.org

The less than or equal to operator (<=) compares
the values of two numbers. If the number to the left is less than or
 equal to the number to the right, it returns true. If the number on
 the left is greater than the number on the right, it returns false.
 ike the equality operator, less than or equal to converts data types.

Examples

4 <= 5 // true
'7' <= 7 // true
5 <= 5 // true
3 <= 2 // false
'8' <= 4 // false

---- Assignments ---
Add the less than or equal to operator to the indicated
lines so that the return statements make sense.

---- Commits -----
Add less than or equalto operator

Adds the less than or equal to operator to the indicated
lines so that the return statements make sense.

---------------*/
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24 ) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

// Change this value to test
testLessOrEqual(10);

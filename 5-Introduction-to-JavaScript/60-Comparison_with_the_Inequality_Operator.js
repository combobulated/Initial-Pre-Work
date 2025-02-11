// 60 Comparison with the Inequality Operator
// source: learn.freecodecamp.org

/* !=

The inequality operator (!=) is the opposite of the equality operator.
It means "Not Equal" and returns false where equality would return true
and vice versa.

* Like the equality operator, the inequality operator will
convert data types of values while comparing.

Examples

1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false

----- Assignment ----
Add the inequality operator != in the if statement so that the
 function will return "Not Equal" when val is not equivalent to 99

 ---- Commits ---
Add inequality operator !=

Adds the inequality operator != in the if statement so that the
function will return "Not Equal" when val is not equivalent to 99

---------*/
// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

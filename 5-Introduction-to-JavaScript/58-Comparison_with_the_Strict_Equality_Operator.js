// 57 Comparison with the Strict Equality Operator
// source: learn.freecodecamp.org

/* "strict equality ''==='' " is false if arguments not of same type and value.
Strict equality (===) is the counterpart to the equality operator (==).
However, unlike the equality operator, which attempts to convert both values
being compared to a common type, the strict equality operator does not
perform a type conversion.

If the values being compared have different types, they are considered unequal,
 and the strict equality operator will return false.

Examples

3 === 3 // true
3 === '3' // false
In the second example, 3 is a Number type and '3' is a String type.

---- Assignment ---
Use the strict equality operator in the if statement so
the function will return "Equal" when val is strictly equal to 7

----- Commits ---
Example of, ===, the strict equality operator

Uses the strict equality operator in the if statement so
the function will return "Equal" when val is strictly equal to 7

-----------*/
// Setup
function testStrict(val) {
  if (val === 7 ) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

// 59 Practice comparing different values
// source: learn.freecodecamp.org

/* " more equality operator examples"

In the last two challenges, we learned about the equality operator (==) and
the strict equality operator (===). Let's do a quick review and practice using
these operators some more.

If the values being compared are not of the same type, the equality operator
will perform a type conversion, and then evaluate the values. However, the
strict equality operator will compare both the data type and value as-is,
without converting one type to the other.

Examples

3 == '3'  // returns true because JavaScript performs
          // type conversion from string to number
3 === '3' // returns false because the types
          // are different and type conversion is not performed
Note
In JavaScript, you can determine the type of a variable or a value with the
typeof operator, as follows:

typeof 3 // returns 'number'
typeof '3' // returns 'string'

---- Assignment ----
The compareEquality function in the editor compares two
values using the equality operator.  Modify the function so that
it returns "Equal" only when the values are strictly equal.

---- Commits ---
Replace equality operatorwith strict operator

Modifys the function so that
it returns "Equal" only when the values are strictly equal.
The equality operator == is replaced with === 
--------------*
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

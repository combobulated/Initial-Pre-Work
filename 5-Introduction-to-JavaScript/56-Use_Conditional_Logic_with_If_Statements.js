// 56 Use Conditional Logic with If Statements
// Source: learn.freecodecamp.org

/* " conditionals if(){}"

If statements are used to make decisions in code.
The keyword if tells JavaScript to execute the code in the curly braces
under certain conditions, defined in the parentheses. These conditions are
known as Boolean conditions and they may only be true or false.

When the condition evaluates to true, the program executes the statement
inside the curly braces. When the Boolean condition evaluates to false, the
statement inside the curly braces will not execute.

Pseudocode

if (condition is true) {
  statement is executed
}
Example

function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true); // returns "It was true"
test(false); // returns "It was false"
When test is called with a value of true, the if statement evaluates myCondition to see if it is true or not. Since it is true, the function returns "It was true". When we call test with a value of false, myCondition is not true and the statement in the curly braces is not executed and the function returns "It was false".

---- Assigment ---
Create an if statement inside the function to return "Yes, that was true"
if the parameter wasThatTrue is true and return "No, that was false" otherwise.

---- Commits ---
Example of "if statements"

Creates an if statement inside the function to return "Yes, that was true"
if the parameter wasThatTrue is not true then return "No, that was false"
otherwise.

---------*/
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.
    if(wasThatTrue){
        return "Yes, that was true";
    }
    return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

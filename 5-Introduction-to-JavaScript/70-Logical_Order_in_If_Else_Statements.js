// 70 Logical Order in If Else Statements
// source: learn.freecodecamp.org

/* " order of if, else if is important "
Order is important in if, else if statements.

The function is executed from top to bottom
so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first:

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
And the second just switches the order of the statements:

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
While these two functions look nearly identical if we pass a number
to both we get different outputs.

foo(0) // "Less than one"
bar(0) // "Less than two"

--- Assignment --
Change the order of logic in the function so that it
will return the correct statements in all cases.

---- Commits
Correct order of if else if Statements

Changes the order of logic in the function so that it
will return the correct statements in all cases.

--------------*/
function orderMyLogic(val) {

  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

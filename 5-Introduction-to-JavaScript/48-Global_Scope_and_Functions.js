// 48 Global Scope and Functions

// source: learn.freecodecamp.org

/* "scope of variables" "vars not in func are Global" "vars not var but
in side functions are also global"

In JavaScript, scope refers to the visibility of variables.
Variables which are defined outside of a function block have Global scope.
This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the var keyword are automatically
created in the global scope. This can create unintended consequences
elsewhere in your code or when running a function again.
You should always declare your variables with var.

------ Assignment ----
Using var, declare a global variable myGlobal outside of any function.
Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var keyword.


---- Commits ---
Demo of global var not in function and in function

Using var, declares a global variable myGlobal outside of both functions.
Initializes it with a value of 10.

Inside function fun1, assigns 5 to oopsGlobal without using the var keyword.
Both vars are global; the first by intent.. the second by accident.


---------*/
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here

  oopsGlobal = 5;

}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

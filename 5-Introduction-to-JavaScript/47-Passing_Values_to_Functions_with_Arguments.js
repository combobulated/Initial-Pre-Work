// 47  Passing Values to Functions with Arguments
// source: learn.freecodecamp.org

/* "function parameters"

Parameters are variables that act as placeholders for the values
that are to be input to a function when it is called. When a function is
 defined, it is typically defined along with one or more parameters.
 The actual values that are input (or "passed") into a function when i
 t is called are known as arguments.

Here is a function with two parameters, param1 and param2:

function testFun(param1, param2) {
  console.log(param1, param2);
}

Then we can call testFun:

testFun("Hello", "World");

We have passed two arguments, "Hello" and "World".
Inside the function, param1 will equal "Hello" and param2 will equal "World".
 Note that you could call testFun again with different arguments and
 the parameters would take on the value of the new arguments.

------- Assignment ---
Create a function called functionWithArgs that accepts two
arguments and outputs their sum to the dev console.

Call the function with two numbers as arguments.

------ Commits ----
Create a 2 argument function

Creates a function called functionWithArgs that accepts two
arguments and outputs their sum to the dev console.
THen, calls the function
-------------------*/
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(a,b) {

  console.log(a+b);
}

functionWithArgs(5,10);

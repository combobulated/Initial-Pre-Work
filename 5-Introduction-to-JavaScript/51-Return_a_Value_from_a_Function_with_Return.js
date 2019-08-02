// 51 Return a Value from a Function with Return
// source: learn.freecodecamp.org
/*  "functions use return to return a value "

We can pass values into a function with arguments.
You can use a return statement to send a value back out of a function.

Example

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8

plusThree takes an argument for num and returns a value equal to num + 3.

---- Assignment ---
Create a function timesFive that accepts one argument,
multiplies it by 5, and returns the new value.
See the last line in the editor for an example of
how you can test your timesFive function.

----- Commits ----
Create function timesFive that returns 5*input

------------------*
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(num) {
  return ( num * 5);
}

console.log(timesFive(3));
console.log(minusSeven(10));

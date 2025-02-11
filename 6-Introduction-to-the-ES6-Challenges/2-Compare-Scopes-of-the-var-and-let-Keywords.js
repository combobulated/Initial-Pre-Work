// 2 Scopes of the var and let Keywords
// source: learn.freecodecamp.org

/* scope of let limited to blocks, statement, or expression

When you declare a variable with the var keyword, it is declared globally,
or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features.
When you declare a variable with the let keyword inside a block, statement,
 or expression, its scope is limited to that block, statement, or expression.

For example:

var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

.....

....

---- Assignment -----
Fix the code so that i declared in the if statement is a separate
variable than i declared in the first line of the function. Be certain
not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var
and let keywords assign scope to the declared variable. When programming a
function similar to the one used in this exercise, it is often better to use
 different variable names to avoid confusion.

 ----Commits --
limit scope of variable using let

Fixes the code so that i declared in the if statement is a separate
variable than i declared in the first line of the function. Be certain
not to use the var keyword anywhere in your code.


 ----------*/
 function checkScope() {
 "use strict";
   let i = "function scope";
   if (true) {
     let i = "block scope";
     console.log("Block scope i is: ", i);
   }
   console.log("Function scope i is: ", i);
   return i;
 }

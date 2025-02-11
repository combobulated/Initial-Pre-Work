// 52 Understanding Undefined Value returned from a Function
// source: learn.freecodecamp.org
/*
"functions with no return, return value of undefined "

A function can include the return statement but it does not have to.
 In the case that the function doesn't have a return statement,
 when you call it, the function processes the inner code but the returned
 value is undefined.

Example

var sum = 0;
function addSum(num) {
  sum = sum + num;
}
var returnedValue = addSum(3); // sum will be modified but returned value is undefined
addSum is a function without a return statement.
The function will change the global sum variable but the returned value
of the function is undefined

-------- Assignment ----------
Create a function addFive without any arguments.
This function adds 5 to the sum variable,
but its returned value is undefined.

--------- Commits ------
Create a function addFive that returns undefined

------------------------*/
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive(){
  sum += 5;
}


// Only change code above this line
var returnedValue = addFive();

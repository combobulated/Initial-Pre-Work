// 3 Storing Values with the Assignment Operator

/*
 store a value in a variable with the assignment operator.

myVariable = 5;


 * Assignment always goes from right to left.
 * Everything to the right of the = operator is resolved
    before the value is assigned to the variable to the left of the operator.

myVar = 5;
myNum = myVar;
This assigns 5 to myVar and then resolves myVar to 5 again
and assigns it to myNum.

---- Assignment --
Assign the value 7 to variable a.

Assign the contents of a to variable b.

---- Commits ---
Demo assignment operator 

Assign the value 7 to variable a.
Assign the contents of a to variable b.
------ */

// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;

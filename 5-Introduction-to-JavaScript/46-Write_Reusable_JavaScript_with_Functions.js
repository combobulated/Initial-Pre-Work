// 46 Write Reusable JavaScript with Functions

// source: learn.freecodecamp.org

/* "functions"

In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

function functionName() {
  console.log("Hello World");
}

You can call or invoke this function by using its name followed by parentheses,
like this:

functionName();

Each time the function is called it will print out the message "Hello World"
on the dev console. All of the code between the curly braces will be executed
every time the function is called.

---------- Assignment ---
Create a function called reusableFunction which prints "Hi World" to the dev console.
Call the function.

-----Commits---
Create a function called reusableFunction

Creates a function which prints "Hi World" to the dev console.
It Calls the function.

---------------*/
// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line
function reusableFunction(){
    console.log("Hi World");
}

reusableFunction();

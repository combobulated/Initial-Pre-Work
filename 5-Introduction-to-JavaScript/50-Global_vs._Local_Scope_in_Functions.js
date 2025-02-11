// 50  Global vs. Local Scope in Functions
// source: learn.freecodecamp.org
/*
" local vars trump global vars"

It is possible to have both local and global variables with the same name.
When you do this, the local variable takes precedence over the global variable.

In this example:

var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
The function myFun will return "Head" because the local version of the
variable is present.

---- Assignment ----
Add a local variable to myOutfit function to override the value
of outerWear with "sweater".

------ Commits -----

Adds a local variable to myOutfit function to override the value
of outerWear with "sweater".  Local variable outerWear has
precedence over global variable outerWear

-----------------*/
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

// 77 Returning Boolean Values from Functions
// source: learn.freecodecamp.org


/*
You may recall from Comparison with the Equality Operator that all
comparison operators return a boolean true or false value.

Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false,
 we can return the result of the comparison:

function isEqual(a,b) {
  return a === b;
}
---- Assignment ---
Fix the function isLess to remove the if/else statements.

---- Commits ----
Return Boolean Values from Functions

Fixes the function isLess to remove the if/else statements.
if/else is replaced with return(a<b)

-------------------*/
function isLess(a, b) {
 // Fix this code

return (a < b );

}

// Change these values to test
isLess(10, 15);

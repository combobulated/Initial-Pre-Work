// 5 Prevent Object Mutation
// source: learn.freecodecamp.org

/* Object.freeze(obj) prevents variable mutation
As seen in the previous challenge, const declaration alone doesn't really
 protect your data from mutation. To ensure your data doesn't change,
  JavaScript provides a function Object.freeze to prevent data mutation.

Once the object is frozen, you can no longer add, update, or delete
properties from it. Any attempt at changing the object will be rejected
without an error.

let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; //will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj);
// { name: "FreeCodeCamp", review:"Awesome"}

---- Assignment----
In this challenge you are going to use Object.freeze to prevent mathematical
constants from changing. You need to freeze the MATH_CONSTANTS object
so that no one is able alter the value of PI, add, or delete properties.

-----Commits ---
Freeze an Object

use Object.freeze to prevent mathematical
constants from changing. You need to freeze the MATH_CONSTANTS object
so that no one is able alter the value of PI, add, or delete properties.
----------------*/
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 88 Testing Objects for Properties
// Source: learn.freecodecamp.org

/* "Test object property existance with .howOwnProperty(propname)"

Sometimes it is useful to check if the property of a given object
exists or not.
 We can use the .hasOwnProperty(propname) method of objects to
 determine if that object has the given property name. .hasOwnProperty()
  returns true or false if the property is found or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false

Modify the function checkObj to test myObj for checkProp.
If the property is found, return that property's value.
If not, return "Not Found".

------- Commit -------
Test object for property

Modifies the function checkObj to test myObj for checkProp.
If the property is found, returns that property's value.
If not, returns "Not Found".

----------------------*/
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here

  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  return "Not Found";

}

// Test your code by modifying these values
checkObj("gift");

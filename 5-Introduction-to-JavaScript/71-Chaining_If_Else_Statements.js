// 71 Chaining If Else Statements
// source: learn.freecodecamp.org

/* "chaining if else statements "
if/else statements can be chained together for complex logic.
 Here is pseudocode of multiple chained if / else if statements:

if (condition1) {
  statement1
} else if (condition2) {
  statement2
} else if (condition3) {
  statement3
. . .
} else {
  statementN
}

------- Assignments -----
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"

---- Commits -----
Example of chained if/else if statments

Writes chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"
-----------------------*/
function testSize(num) {
  // Only change code below this line
  if (num < 5 ){
      return "Tiny"
    } else if (num <10 ){
      return "Small"
    } else if (num < 15) {
      return "Medium"
    } else if ( num < 20) {
      return "Large"
    } else if (num >= 20) {
      return "Huge"
    }

  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);


------------------*

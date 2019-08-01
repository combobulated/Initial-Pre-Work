// 34 Use Bracket Notation to Find the Nth-to-Last Character in a String
// src: learn.freecodecamp.org
/*
 to retrieve the Nth-to-last character:

For example, you can get the value of the third-to-last
letter of the var firstName = "Charles" string by using
 firstName[firstName.length - 3]

--- assignment ---
Use bracket notation to find the second-to-last
character in the lastName string.

Hint
Try looking at the thirdToLastLetterOfFirstName variable declaration if you get stuck.

----- Commits ---

Fetch second to last char in string, lastName

Uses length of the string - 2 as index for lastName[]
ie.. var secondToLastLetterOfLastName = lastName[lastName.length - 2]

-------*/
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

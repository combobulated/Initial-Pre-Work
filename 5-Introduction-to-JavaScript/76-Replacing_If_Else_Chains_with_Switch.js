// 76 Replacing If Else Chains with Switch
// source: learn.freecodecamp.org
/*
" "
If you have many options to choose from,
a switch statement can be easier to write than many
chained if/else if statements. The following:

if (val === 1) {
  answer = "a";
} else if (val === 2) {
  answer = "b";
} else {
  answer = "c";
}
can be replaced with:

switch(val) {
  case 1:
    answer = "a";
    break;
  case 2:
    answer = "b";
    break;
  default:
    answer = "c";
}

------ Assignment ----
Change the chained if/else if statements into a switch statement.

------ Commits ------
Replace chained if/else if statements into a switch statement

Changes the chained if/else if statements into a switch statement.
--------------------*/
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch (val) {

    case "bob":
      answer = "Marley";
      break;

    case 42:
      answer = "The Answer";
      break;

    case  1:
      answer = "There is no #1";
      break;

    case 99:
      answer = "Missed me by this much!";
      break;

    case  7:
      answer = "Ate Nine";
      break;

    default:
      answer = "";
      break;

  }

  // Only change code above this line
  return answer;
}

// Change this value to test
chainToSwitch(7);

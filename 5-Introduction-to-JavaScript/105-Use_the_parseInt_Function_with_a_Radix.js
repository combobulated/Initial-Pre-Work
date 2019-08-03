// 105 Use the parseInt Function with a Radix
// source: learn.freecodecamp.org

/* parseInt with radix (informs function of inputs base)

The parseInt() function parses a string and returns an integer.
 It takes a second argument for the radix, which specifies the base of
 the number in the string. The radix can be an integer between 2 and 36.

The function call looks like:

parseInt(string, radix);

And here's an example:

var a = parseInt("11", 2);

The radix variable says that "11" is in the binary system, or base 2.
This example converts the string "11" to an integer 3.


------Assignment ----
Parse to decimal a string of binary format

Use parseInt() in the convertToInteger function so it
 converts a binary number to an integer and returns it.

 ---------------------*/
 function convertToInteger(str) {


  return parseInt(str, 2);  // radix 2 -> binary base 2
}

convertToInteger("10011");

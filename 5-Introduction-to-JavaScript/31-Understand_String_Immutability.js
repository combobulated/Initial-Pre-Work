// 31 Understand String Immutability   source: free.codecamp.org

In JavaScript, String values are immutable, which means that they cannot
be altered once created.

For example, the following code:

var myStr = "Bob";
myStr[0] = "J";
cannot change the value of myStr to "Job", because the contents of myStr
cannot be altered. Note that this does not mean that myStr cannot be changed,
just that the individual characters of a string literal cannot be changed.
The only way to change myStr would be to assign it with a new string, like this:

var myStr = "Bob";
myStr = "Job";

---- Assignment ---
Correct the assignment to myStr so it contains the string value of
 Hello World using the approach shown in the example above.

 ---- Commits ---
Change myStr from Jello World to Hello World

Removes incorrect code that attempts to change and immutable string.
Rather, replaces myStr contents with an entire new string.

 -------

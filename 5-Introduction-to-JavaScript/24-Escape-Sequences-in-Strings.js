// 24 Escape Sequences in Strings
/*
Quotes are not the only characters that can be escaped inside a string.
 There are two reasons to use escaping characters:
 First is to allow you to use characters you might not otherwise be able
 to type out, such as a backspace.
 Second is to allow you to represent multiple quotes in a string without
 JavaScript misinterpreting what you mean. We learned this in the
 previous challenge.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed

Note that the backslash itself must be escaped in order to display as a backslash.

--- Assignment ---

Assign the following three lines of text into the single variable myStr
using escape sequences.

FirstLine
    \SecondLine
ThirdLine

You will need to use escape sequences to insert special characters correctly.
You will also need to follow the spacing as it looks above, with no spaces
between escape sequences or words.

Here is the text with the escape sequences written out.

"FirstLinenewlinetabbackslashSecondLinenewlineThirdLine"

----- Commits ---
Use of escape sequences in strings

This commit gives myStr var a string literal
FirstLine
    \SecondLine
ThirdLine
using \n for new lines, \t for tab

----------------*/
var myStr = "FirstLine\n\tab\\SecondLine\nThirdLine";

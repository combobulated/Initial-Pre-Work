// 17 Create Strings using Template Literals
// source: learn.freecodecamp.org

/* template literal

A new feature of ES6 is the template literal.
This is a special type of string that makes creating complex strings easier.

Template literals allow you to create multi-line strings and to use
string interpolation features to create strings.

Consider the code below:

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
A lot of things happened there.

Firstly, the example uses backticks (`), not quotes (' or "), to wrap the string.

Secondly, notice that the string is multi-line, both in the code and the output.
This saves inserting \n within strings.

The ${variable} syntax used above is a placeholder. Basically,
you won't have to use concatenation with the + operator anymore.
 To add variables to strings, you just drop the variable in a template string
 and wrap it with ${ and }. Similarly, you can include other expressions
 in your string literal, for example ${a + b}.

This new way of creating strings gives you more flexibility to
 create robust strings.

---- Assignments ---
Use template literal syntax with backticks to display each entry of
 the result object's failure array. Each entry should be wrapped
  inside an li element with the class attribute text-warning, and
  listed within the resultDisplayArray.
-------Commits ---
Use the template literal

Use template literal syntax with backticks to display each entry of
 the result object's failure array. Each entry should be wrapped
  inside an li element with the class attribute text-warning, and
  listed within the resultDisplayArray.
-------------------*/

  // change code below this line

  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  // change code above this line

  return resultDisplayArray;
}

 // makeList(result.failure) should return:
 // [ `<li class="text-warning">no-var</li>`,
 //   `<li class="text-warning">var-on-top</li>`,
 //   `<li class="text-warning">linebreak</li>` ]

const resultDisplayArray = makeList(result.failure);

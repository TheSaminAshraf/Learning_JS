/*

I am learning JavaScript from codecademy.com.
Course name: Introduction to JavaScript.

In this course, I will learn programming fundamentals with JavaScript syntax. After completing this
course, I will be able to do the following:

1. Implement JavaScript data types, built-in methods, and variables
2. Use conditionals to control the flow of a program in JavaScript
3. Construct functions and pass data through them
4. Identify global and block-level scopes in JavaScript
5. Use arrays to store lists of data
6. Use loops to execute blocks of code multiple times
7. Use iterator methods to simplify the process of looping over arrays
8. Use JavaScript ES6 object syntax to model real-world items

### Console ###

The console is a panel that displays important messages, like errors, for developers.
In JavaScript, the "console" keyword refers to an object, a collection of
data and actions, that we can use in our code.
One action, or method, that is built into the console object is the .log() method. When we
write console.log() what we put inside the parentheses will get printed, or logged,
to the console. 

*/

console.log(20);
console.log(1);

/*

### Comments ###

Comments can explain what the code is doing, leave instructions for developers using the code,
or add any other useful annotations.
There are two types of code comments in JavaScript:
1. A single line comment will comment out a single line and is denoted with two forward
slashes // preceding it. You can also use a single line comment to comment after a
line of code.
2. A multi-line comment will comment out multiple lines and is denoted with /* to
begin the comment, and */ // to end the comment. You can also use this syntax to
// comment something out in the middle of a line of a code.

// Opening line
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

/*

### Data Types ###

Data types are the classifications we give to the different kinds of data that
we use in programming. in JavaScript, there are eight fundamental data types:

1. Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
2. BigInt: Any number, greater than 2^53 - 1 or less than - 2^53 + 1, with
n appended to the number: 123456789123456789n.
3. String: Any grouping of characters on your keyboard (letter, numbers,
spaces, symbols, etc.) surrounded by single quotes: '...' or double quotes
"...".
4. Boolean: This data type only has two possible values - either true or false.
5. Null: This data type represents the intentional absence of a value, and is
represented by the keyword "null".
6. Undefined: This data type is denoted by the keyword undefined. It also represents
the absence of a value though it has a different use than null. undefined means that a given
value does not exist.
7. Symbol: A newer feature to the language, symbols are unique identifiers, useful in more
complex coding.
8. Object: Collections of related data.

The first 7 of those types are considered primitive data types. They are the most basic data
types in the language. Objects are more complex.

*/

console.log("JavaScript");
console.log(2011)
console.log("Woohoo! I love to code! #codecademy")
console.log(20.49)

/*

### Arithmetic Operators ###

An operator is a character that performs a task in our code. JavaScript has several built-in
arithmetic operators, that allow us to perform arithmetic calculations on numbers. These include
the following operators and their corresponding symbols:

1. Add: +
2. Subtract: -
3. Multiply: *
4. Divide: /
5. Remainder: %

Note that when we console.log() the computer will evaluate the expression inside the parentheses
and print that result to the console. If we wanted to print the characters 3 + 4, we would
wrap them in quotes and print them as a string.

The remainder operator, sometimes called modulo, returns the number that remains after the
right-hand number divides into the left-hand number as many times as it evenly can: 11 % 3 equals
2 because 3 fits into 11 three times, leaving 2 as the remainder.

*/

console.log(20 + 3.5)
console.log(2025 - 1969)
console.log(65/240)
console.log(0.2708 * 100)

/*

### String Concatenation ###

Operators are not just for numbers. When a + operator is used on two strings, it appends the
right string to the left string. This process of appending one string to another is called
concatenation. Just like with regular math, we can combine, or chain, our operations to get
a final result.

*/

console.log("Hello " + "World")

/*

### Properties ###

When you introduce a new piece of data into a JavaScript program, the browser saves it as
an instance of the data type. All data types have access to specific properties that are
passed down to each instance. For example, every string instance has a property called
length that stores the number of characters in that string. You can retrieve property
information by appending the string with a period and the property name.

The . is another operator called the dot operator.

*/

console.log("Teaching the world how to code".length);

/*

### Methods ###

Remember that methods are actions we can perform. Data types have access to specific methods
that allow us to handle instances of that data type. JavaScript provides a number of
string methods:

We call, or use, these methods by appending an instance with:

1. a period (the dot operator)
2. the name of the method
3. opening and closing parentheses

When we use console.log() we are calling the .log() method on the console object.
.toUpperCase() method is called on a string instance to return the string in all capital
letters. .startsWith() method is called on a string with an argument between the parentheses
to check if the string starts with a specified substring.

JavaScript string documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

/*

### Built-in Objects ###

In addition to console, there are other objects built into JavaScript. For example, if you wanted
to perform more complex mathematical operations than arithmetic, JavaScript has the built-in
Math object.

*/

console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8))
console.log(Number.isInteger(2017))

/*

### Review ###

Data is printed, or logged, to the console, a panel that displays messages, with console.log().
We can write single line comments with // and multi-line comments with /* and */ /*
There are 8 fundamental data types in JavaScript: numbers, BigInts, strings, booleans, null,
undefined, symbol, and object.
Numbers are any number without quotes: 23.8590
Strings are characters wrapped in single or double quotes: "Hello"
The built-in arithmetic operators include +, -, *, /, and %.
Objects, including instances of data types, can have properties, stored information. The
properties are denoted with a . after the name of the object, for example: "Hello".length.
Objects, including instances of data types, can have methods which perform actions. Methods
are called by appending the object or instance with a period, the method name, and parentheses.
For example: "Hello".toUpperCase()
We can access properties and methods by using the ., dot operator.
Built-in objects, including Math, are collections of methods and properties that JavaScript
provides.

Codecademy Docs: JavaScript
https://www.codecademy.com/resources/docs/javascript

*/
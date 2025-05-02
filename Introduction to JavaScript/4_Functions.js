/* eslint-disable no-unused-vars */
/*

### What are Functions ###

In programming, we often use code to perform a specific task multiple times. Instead of rewriting
the same code, we can group a block of code together and associate it with one task, then we can
reuse that block of code whenever we need to perform the task again. We achieve this by creating
a function. A function is a reusable block of code that groups together a sequence of statements
to perform a specific task.

### Function Declarations ###

In JavaScript, there are many ways to create a function. One way to create a function is by using
a function declaration. Just like how a variable declaration binds a value to a variable name, a
function declaration binds a function to a name, or an identifier. A function declaration consists
of:

1. The function keyword.
2. The name of the function, or its identifier, followed by parentheses.
3. A function body, or the block of statements required to perform a specific task, enclosed in
the function's curly brackets {}.

A function declaration is a function that is bound to an identifier, or name. We should also be
aware of the hoisting feature in JavaScript which allows access to function declarations before
they are defined.

Hoisting - Hoisting is a default process where JavaScript "splits" var and function declarations
from their definitions. These declarations are "moved up" to the top of the top of the file
above where they were defined and/or used. This means that JavaScript knows about these 
declarations before the rest of the code is executed.

Hoisting is not considered a good practice.

*/

function  getReminder()  {
    console.log("Water the plants.");
}
  
function  greetInSpanish()  {
  console.log("Buenas tardes");
}

getReminder();
greetInSpanish();

/*

### Calling a Function ###

A function declaration binds a function to an identifier. However, a function declaration does not
ask the code inside the function body to run, it just declares the existence of the function. The
code inside a function body runs, or executes, only when the function is called.

To call a function in your code, you type the function name followed by parentheses. This function
call executes the function body, or all of the statements between the curly braces in the function
declaration. We can call the same function as many times as we needed.

*/

function  sayThanks()  {
    console.log("Thank you for your purchase! We appreciate your business.");
}
  
sayThanks();
sayThanks();
sayThanks();

/*

### Parameters and Arguments ###

Some functions can take inputs and use the inputs to perform a task. When declaring a function,
we can specify its parameters. Parameters allow functions to accept input(s) and perform a task
using the input(s). We use parameters as placeholders for information that will be passed to the
function when it is called.

The parameters are specified between the parentheses (), and inside the function body. They act
just like regular variables. They also act as placeholders for values that will be used.

When calling a function that has parameters, we specify the values in the parentheses that follow
the function name. The values that are passed to the function when it is called are called
arguments. Arguments can be passed to the function as values or variables. The order in which
arguments are passed and assigned follows the order that the parameters are declared.

By using parameters, a function can be reused any number of times to perform a specific task. They
are a powerful tool in programming.

*/

function sayThanks1(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks1("Cole");

/*

### Default Parameters ###

Default parameters allow parameters to have a predetermined value in case there is no argument
passed into the function or if the argument is undefined when called.

When a value is passed as an argument to a function, the value overrides the default parameter.
When there isn't an argument passed into the function, the default value is used.

By using a default parameter, we account for situations when an argument isn't passed into a
function that is expecting an argument.

*/

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

/*

### Return ###

When a function is called, the computer will run through the function's code and evaluate the
result. By default, the resulting value is undefined.

To pass back information from the function call, we use a return statement. To create a return
statement, we use the return keyword followed by the value that we wish to return. If the value
is omitted, undefined is returned instead.

The return keyword is powerful because it allows functions to produce an output. We can then save
the output to a variable for later use.

*/

function monitorCount(rows, columns) {
    return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);

/*

### Helper Functions ###

We can also use the return value of a function inside another function. These functions being
called within another function are often referred to as helper functions. Since each function is
carrying out a specific task, it makes our code easier to read and debug if necessary.

We can use functions to section off small bits of logic or tasks, then use them when we need to.
Writing helper functions can help take large and difficult tasks and break them into smaller and
more manageable tasks.

*/

function monitorCount1(rows, columns) {
    return rows * columns;
}
function costOfMonitors(rows, columns)  {
  return monitorCount1(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

/*

### Functions Expressions ###

Another way to define a function is to use a function expression. To define a function inside an
expression, we can use the function keyword. In a function expression, the function name is usually
omitted. A function with no name is called an anonymous function. A function expression is often
stored in a variable in order to refer to it.

To declare a function expression:
1. Declare a variable to make the variable's name be the name, or identifier, of your function.
Since the release of ES6, it is common practice to use const as the keyword to declare the
variable.
2. Assign as that variable's value an anonymous function created by using the function keyword
followed by a set of parentheses with possible parameters. Then a set of curly braces that contain
the function body.

To invoke a function expression, write the name of the variable in which the function is stored
followed by parentheses enclosing any arguments being passed into the function.

Unlike function declarations, function expressions are not hoisted so they cannot be called before
they are defined.

*/

const plantNeedsWater = function(day) {
    if (day === "Wednesday")  {
      return true;
    } else  {
      return false;
    }
};
console.log(plantNeedsWater("Tuesday"));

/*

### Arrow Functions ###

ES6 introduced arrow function syntax, a shorter way to write functions by using the special
"fat arrow" () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create
a function. Instead, you first include the parameters inside the () and then add an arrow =>
that points to the function body surrounded in {}.

It's important to be familiar with the multiple ways of writing functions because you will come
across each of these when reading other JavaScript code.

*/

const plantNeedsWater1 = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
};
console.log(plantNeedsWater1("Tuesday"));

/*

### Concise Body Arrow Functions ###

JavaScript also provides several ways to refactor arrow function syntax. The most condensed form
of the function is known as concise body.

1. Functions that only take one single parameter do not need that parameter to be enclosed in
parentheses. However, if a function takes zero or multiple parameters, parentheses are required.
2. A function body composed of a single-line block does not need curly braces. Without the curly
braces, whatever that line evaluates will be automatically returned. The contents of the block
should immediately follow the arrow => and the return keyword can be removed. This is referred to
as implicit return.

*/

const plantNeedsWater2 = day => day === 'Wednesday' ? true : false;
console.log(plantNeedsWater2("Tuesday"));

// Zero parameter
const functionName = () => {};

// One parameter
const functionName1 = parameterOne => {};

// Two parameters
const functionName2 = (parameterOne, parameterTwo) => {};

// Single-line block
const sumNumbers = number => number + number;

// Multi-line block
const sumNumbers1 = number => {
    const sum = number + number;
    return sum;
};

/*

### Review ###

1. A function is a reusable block of code that groups together a sequence of statements to perform
a specific task.
2. A parameter is a named variable inside a function's block which will be assigned the value of
the argument passed in when the function is invoked.
3. ES6 introduces new ways of handling arbitrary parameters through default parameters which allow
us to assign a default value to a parameter in case no argument is passed into the function.
4. To return a value from a function, we use a return statement.
5. Function definition can be made concise using concise arrow notation.

It's good to be aware of the difference between function expressions, arrow functions, and function
declarations.

*/

// A function declaration:
function greetWorld()   {
    console.log("Hello, World!");
}

// A function declaration with parameters
function calculateArea(width, height)   {
    console.log(width * height);
}

// Function call:
greetWorld();

// Defining a function using function expressions
const calculateArea1 = function(width, height) {
    const area = width * height;
    return area;
};

// Defining a function using arrow function notation
const calculateArea2 = (width, height) => {
    const area = width * height;
    return area;
};

// Concise body arrow functions
// Single-line block and multi-line block concise body arrow functions respectively:
const sumNumbers3 = number => number + number;
const sumNumbers4 = number => {
    const sum = number + number;
    return sum;
};
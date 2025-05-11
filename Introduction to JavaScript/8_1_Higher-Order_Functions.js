/*

### Functions as Data ###

JavaScript functions behave like any other data type in the language; we can assign functions to
variables, and we can reassign them to new variables.

When we assign a function to a variable, the variable holds a reference to the original function.
The memory address of the variable and the function will point to the same exact location. After
assigning, the function can be invoked by calling the variable as a function, e.g., myFunc() where
myFunc = myFunctionIDesigned.

Notice how the function is assigned to the variable without any parentheses. This is because we
want to assign the value of the function itself, not the value it returns when invoked.

In JavaScript, functions are first class objects. This means that JavaScript functions can have
properties and methods like other objects.

Since functions are a type of object, they have properties such as .length and .name, and methods
such as .toString().

Codecademy documentation on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

Functions are special because we can invoke them, but we can still treat them like any other type
of data.

*/

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      // eslint-disable-next-line no-constant-condition
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);

/*

### Functions as Parameters ###

A parameter is a placeholder for the data that gets passed into a function. Since functions can
behave like any other type of data in JavaScript, functions can accept other functions as
parameters. A higher-order function is a function that either accepts functions as parameters,
returns a function, or both. We call functions that get passed in as parameters as callback
functions. Callback functions get invoked during the execution of the higher-order function.

When we invoke a higher-order function, and pass another function in as an argument, we don't
invoke the argument function. Invoking it would evaluate to passing in the return value of that
function call. With callback functions, we pass in the function itself by typing the function name
without the parentheses.

Anonymous functions (functions without a name) can be arguments too.

*/

const addTwo = num => {
    return num + 2;
}
  
const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return checkB;
  } else {
    return "Inconsistent results";
  }
}

console.log(checkConsistentOutput(addTwo, 5));

/*

### Review ###

1. Abstraction allows us to write complicated code in a way that's easy to reuse, debug, and
understand for human readers.
2. We can work with functions the same way we work with any other type of data, including
reassigning them to new variables.
3. JavaScript functions are first-class objects, so they have properties and methods like any other
object.
4. Functions can be passed into other functions as parameters.
5. A higher-order function is a function that either accepts functions as parameters, returns a 
function, or both.

*/
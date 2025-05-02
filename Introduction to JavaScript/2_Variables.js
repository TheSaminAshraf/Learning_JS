/*

### Variables ###

In programming, a variable is a container for a value. Information stored in variables, such as a
username, account number, or even personalized greeting can then be found in memory.Variables
also provide a way of labelling data with a descriptive name, so our programs can be
understood more clearly by the reader and ourselves.

In short, variables label and store data in memory. There are only a few things you can do with
variables:

1. Create a variable with a descriptive name.
2. Store or update information stored in a variable.
3. Reference or "get" information stored in a variable.

It is important to distinguish variables are not values: they contain values and represent
them with a name.

### Create a Variable: var ###

let and const are two keywords used to create, or declare, variables. Before the ES6 update,
programmers could only use the var keyword to declare variables.

There are a few general rules for naming variables:

1. Variable names cannot start with numbers.
2. Variable names are case-sensitive, so myName and myname would be different variables.
It is bad practice to create two variables that have the same name using different cases.
3. Variable names cannot be the same as keywords.

*/

var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

/*

### Create a Variables: let ###

The let keyword was introduced in ES6. This keyword signals that the variable can be reassigned
a differed value. Another concept that we should be aware of when using let (and even var) is
that we can declare a variable without assigning the variable a value. In such a case, the
variable will be automatically initialized with a value of undefined.

*/

let changeMe = true;
changeMe = false;
console.log(changeMe);
let price;
console.log(price);
price = 350;
console.log(price);

/*

### Create a Variable: const ###

The const keyword was also introduced in ES6, and is short for the word constant. Just like with
var and let you can store any variable in a const variable. The way tou declare a const
variable and assign a value to it follows the same structure as let and var.

However, a const variable cannot be reassigned because it is constant. If you try to reassign a
const variable, you will get a TypeError. Constant variables must be assigned a value when
declared. If you try to declare a const variable without a value, you will get a SyntaxError.

If you are trying to decide between which keyword to use, let or const, think about whether
you will need to reassign the variable later on. If you do not need to reassign the variable use
let, otherwise use const.

*/

const entree = "Enchiladas";
console.log(entree);
//entree = "Tacos";
//const testing;

/*

### Mathematical Assignment Operators ###

Mathematical assignment operators reduce code redundancy. For example, we can use += instead of,
let's say, w = w + 1;. We also have access to other mathematical assignment operators: -=, *=,
and /= which work in a similar fashion.

*/

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

/*

### The Increment and Decrement Operators ###

Other mathematical assignment operators include the increment operator (++) and decrement operator
(--). The increment operator will increase the value of the variable by 1. The decrement operator
will decrease the value of the variable by 1. Just like the previous mathematical assignment
operators, the variable's value is updated and assigned as the new value of that variable.

*/

let gainedDollar = 3;
let lostDollar = 50;
// eslint-disable-next-line no-unused-vars
gainedDollar++;
// eslint-disable-next-line no-unused-vars
lostDollar--;

/*

### String Concatenation with Variables ###

The + operator can be used to combine two string values even if those values are being stored in
variables.

*/

let favoriteAnimal = "Cat";
console.log("My favorite animal: " + favoriteAnimal);

/*

### String Interpolation ###

In the ES6 version of JavaScript, we can insert, or interpolate, variables into strings using
template literals.

Notice that:

A template literal is wrapped by backticks `.
Inside the template literal, you will see a placeholder ${variable}. The value of the variable
is inserted into the template literal.
When we interpolate `I want ${variable}`, the output we print is the string: "I want variable.".

One of the biggest benefits to using template literals is the readability of the code. Using
template literals, you can more easily tell what the new string will be. You also don't have to
worry about escaping double quotes or single quotes.

*/

let myName = "Sam";
let myCity = "Toronto";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

/*

### typeof operator ###

While writing code, it can be useful to keep track of the data types of the variables in your
program. If you need to check the data type of a variable's value, you can use the typeof
operator. The typeof operator check the value to its right and returns, or passes back, a string
of the data type.

*/

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);

/*

### Review Variables ###

Let's review what we learned:

1. Variables hold reusable data in a program and associate it with a name.
2. Variables are stored in memory.
3. The var keyword is used in pre-ES6 versions of JavaScript.
4. let is the preferred way to declare a variable when it can be reassigned, and const is the
preferred way to declare a variable with a constant value.
5. Variables that have not been initialized store the primitive data type undefined.
6. Mathematical assignment operators make it easy to calculate a new value and assign it to the
same variable.
7. The + operator is used to concatenate strings including string values held in variables.
8. In ES6, template literals use backticks ` and ${} to interpolate values into a string.
9. The typeof keyword returns the data type (as a string) of a value.

*/

// Kelvin Weather

// Constant variable kelvin
const kelvin = 0;
// Constant variable celsius
const celsius = kelvin - 273;
// Constant variable Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// Rounding down fahrenheit value
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newtonScale = celsius * (33/100);
newtonScale = Math.floor(newtonScale);
console.log(`The temperature is ${newtonScale} degrees Newton scale.`);

// Dog Years

// Variable to store my age
let myAge = 20;
// Variable to store early dog years
let earlyYears = 2;
earlyYears *= 10.5;
// Variable to store later dog years
let laterYears = myAge - 2;
// laterYears multiplied by 4
laterYears *= 4;
// Variable to store dog age
let myAgeInDogYears = earlyYears + laterYears;
// Variable to store my name in lower case
let myName1 = "Sam".toLowerCase();
// Logging the output to console
console.log(`My name is ${myName1}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years in dog years.`);
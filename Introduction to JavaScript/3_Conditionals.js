/*

### What are Conditional Statements? ###

If-else decisions can be modeled in code by creating conditionals statements. A conditional
statement checks a specific condition(s) and performs a task based on the condition(s).

We will be covering the following concepts:

1. if, else if, and else statements
2. comparison operators
3. logical operators
4. truthy vs falsy values
5. ternary operators
6. switch statement

### If Statement ###

We often perform a task based on a condition. In programming, we can also perform a task based on
a condition using an if statement. The if statement is composed of:

1. The if keyword followed by a set of parentheses () which is followed by a code block, or block
statement, indicated by a set of curly braces {}.
2. Inside the parentheses (), a condition is provided that evaluates to true or false.
3. If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
4. If the condition evaluates to false, the block won't execute.

*/

let sale1 = true;
sale1 = false;
if (sale1) {
  console.log("Time to buy!");
}

/*

### If...Else Statements ###

In many cases, we will have code we want to run if our condition evaluates to false. If we wanted
to add some default behavior to the if statement, we can add an else statement to run a block of
code when the condition evaluates to false.

An else statement must be paired with an if statement, and together they are referred to as an
if...else statement. The else statement:

1. Uses the else keyword following the code block of an if statement.
2. Has a code block that is wrapped by a set of curly braces{}.
3. The code inside the else statement code block will execute when the if statement's condition
evaluates to false.

if...else statements allow us to automate solutions to yes-or-no questions, also known as
binary decisions.

*/

let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log("Time to wait for a sale.");
}

/*

### Comparison Operators ###

When writing conditional statements, sometimes we need to use different types of operators to
compare values. These operators are called comparison operators.

Here is a list of some handy comparison operators and their syntax:

1. Less than: <
2. Greater than: >
3. Less than or equal to: <=
4. Greater than or equal to: >=
5. Is equal to: ===
6. Is not equal to: !==

Comparison operators compare the value on the left with the value on the right. We can also use
comparison operators on different data types like strings.

All comparison statements evaluate to either true or false and are made up of:

1. Two values that will be compared.
2. An operator that separates the values and compares them accordingly (>, <, >=, <=, ===, !==)

*/

let hungerLevel = 7;
if (hungerLevel > 7) {
  console.log("Time to eat!");
} else {
  console.log("We can eat later!");
}

/*

### Logical Operators ###

Working with conditionals means that we will be using booleans,  true or false values. In
JavaScript, there are operators that work with boolean values known as logical operators. We can
use logical operators to add more sophisticated logic to our conditionals. There are three
logical operators:

1. the and operator (&&)
2. the or operator (||)
3. the not operator, otherwise known as the bang operator (!)

When we use the && operator, we are checking that two things are true. When using the && operator,
both conditions must evaluate to true for the entire condition to evaluate to true and execute.
Otherwise, if either condition is false, the && condition will evaluate to false and the else
block will execute.

If we only care about either condition being true, we can use the || operator. When using the ||
operator, only one of the conditions must evaluate to true for the overall statement to evaluate
to true. If the first condition in an || statement evaluates to true, the second condition
won't even be checked. The code in the else statement will execute only if both comparisons
evaluate to false.

The ! not operator reverses, or negates, the value of a boolean. Essentially, the ! operator
will either take a true value and pass back false, or it will take a false value and pass
back true.

Logical operators are often used in conditional statements to add another layer of logic
to our code.

*/

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

/*

### Truthy and Falsy ###

Let's consider how non-binary data types, like strings or numbers, are evaluated when checked
inside a condition.

The code block in an if statement will run if the variable, for example a string, in the
condition has a truthy value; even though the value of the string variable is not explicitly the
value true, when used in a boolean or conditional context, it evaluates to true because it has
been assigned a non-falsy value.

So which values are falsy - or evaluates to false when checked as a condition? The list of falsy
values includes:

1. 0
2. Empty strings like "" or ''
3. null which represent when there is no value at all
4. undefined which represent when a declared variable lacks a value
5. NoN, or Not a Number

If the variable in the condition is a number or variable = 0, the code block in the else statement
will run since 0 is a falsy value.

*/

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/*

### Truthy and Falsy Assignment ###

In a boolean condition, JavaScript assigns the truthy value to a variable if you use the ||
operator in your assignment.

Because || or statements check the left-hand condition first, the variable will be assigned the
actual if it is truthy, and it will be assigned the other value if the variable is false. This
concept is also referred to as short-circuit evaluation.

*/

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || "pen";

console.log(`The ${writingUtensil} is mightier than the sword.`);

/*

### Ternary Operator ###

In the spirit of using short-hand syntax, we can use a ternary operator to simplify an if...else
statement. Like if...else statements, ternary operators can be used for conditions which
evaluate to true or false.

*/

let isLocked = false;

// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }

isLocked ? console.log("You will need a key to open the door.") : console.log("You will not need a key to open the door.");

let isCorrect = true;

// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

isCorrect ? console.log("Correct!") : console.log("Incorrect!");

let favoritePhrase1 = 'Love That!';

// if (favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log("I don't love that!");
// }

favoritePhrase1 === "Love That!" ? console.log("I love that!") : console.log("I don't love that!");

/*

### Else If Statements ###

We can add more conditions to our if...else with an else if statement. The else if statement allows
for more than two possible outcomes. You can add as many else if statements as you would like, to
make more complex conditionals.

The else if statement always comes after the if statement and before the else statement. The
else if statement also takes a condition.

The else if statements allow you to have multiple possible outcomes. if / else if / else statements
are read from top to bottom, so the first condition that evaluates to true from the top to bottom
is the block that gets executed. The rest of the conditions are not evaluated. If none of the
conditions evaluated to true, then the code in the else statement would have executed.

*/

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

/*

### The switch keyword ###

else if statements are a great tool if we need to check multiple conditions. In programming, we
often find ourselves needing to check multiple values and handling each of them differently. A
switch statement provides an alternative syntax that is easier to write and read.

1. The switch keyword initiates the statement and is followed by (...), which contains the value
that each case will compare. 
2. Inside the block, {...}, there are multiple cases. The case keyword checks if the expression
matches the specified value that comes after it.
3. The break keyword tells the computer to exit the block and not execute any more code or check
any other cases inside the code block. Note: without break keywords, the first matching case
will run, but so will every subsequent case regardless of whether or not it matches - including
the default. This behavior is different from if / else conditional statements that execute only
one block of code.
4. At the end of each switch statement, there is a default statement. If none of the cases are
true, then the code in the default statement will run.

*/

let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  case "first place":
    console.log("You get the gold medal!");
    break;
  case "second place":
    console.log("You get the silver medal!");
    break;
  case "third place":
    console.log("You get the bronze medal!");
    break;
  default:
    console.log("No medal awarded.");
    break;
}

/*

### Review ###

1. An if statement checks a condition and will execute a task if that condition evaluates to true.
2. if...else statements make binary decisions and execute different code blocks based on a provided
condition.
3. We can add more conditions using else if statements.
4. Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
5. The logical and operator, &&, or "and", checks if both provided expressions are truthy.
6. The logical operator ||, or "or", checks if either provided expressions is truthy.
7. The bang operator, !, switches the truthiness and falsiness of a value.
8. The ternary operator is shorthand to simplify concise if...else statements.
9. A switch statement can be used to simplify the process of writing multiple else if statements.
The break keyword stops the remaining cases from being checked and executed in a switch statement.

*/
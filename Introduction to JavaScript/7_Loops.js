/* eslint-disable no-unused-vars */

/*

### Loops ###

A loop is a programming tool that repeats a set of instructions until a specified condition, called
a stopping condition is reached.

Loops allow us to create efficient code that automates processes to make scalable, manageable
programs.

*/

// Write your code below
let vacationSpots = ["Japan", "Hawaii", "Thailand"];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

/*

### The For Loop ###

The typical for loop includes an iterator variable that usually appears in all three expressions.
The iterator variable is initialized, checked against the stopping condition, and assigned a new
value on each loop iteration. Iterator variables can have any name, but it's best practice to use a
descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:

1. an initialization starts the loop and can also be used to declared the iterator variable.
2. a stopping condition is the condition that the iterator variable is evaluated against - if the 
condition evaluates to true the code block will run, and if it evaluates to false the code will
stop.
3. an iteration statement is used to update the iterator variable on each loop.

*/

for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}

/*

### Looping in Reverse ###

To run a backward for loop, we must:

1. Set the iterator variable to the highest desired value in the initialization expression.
2. Set the stopping condition for when the iterator variable is less than the desired amount.
3. The iterator should decrease in intervals after each iteration.


*/

for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}

/*

### Looping through Arrays ###

for loops are very handy for iterating over data structures. Arrays hold lists of data, like
customer names or product information. A for loop can be used to iterate through the array to
accomplish any task easily.

To loop through each element in an array, a for loop should use the array's .length property
in its condition.

With for loops, it's easier for us to work with elements in arrays.

*/

const vacationSpots1 = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots1.length; i++)  {
  console.log(`I would love to visit ${vacationSpots1[i]}.`);
}

/*

### Nested Loops ###

When we have a loop running inside another loop, we call that a nested loop. One use for a nested
for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner
for loop will run completely.

*/

let bobsFollowers = ["Sam", "Jonas", "John", "Carol"];
let tinasFollowers = ["Jonas", "Doe", "Sam"];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++)  {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers);

/*

### The While Loop ###

How a while loop works:

1. The iterator variable is declared before the loop. We can access it inside our while loop as
long as it's in the global scope or the same local scope as the while loop.
2. We start our loop with the keyword while followed by our stopping condition, or test condition.
This will be evaluated before each round of the loop. While the condition evaluates to true, the
block will continue to run. Once it evaluates to false the loop will stop.
3. Next, we have our loop's code block which will also contain the incrementing statement of the 
iterator variable.

*/

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;
while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

/*

### Do...While Statements ###

A do...while statement says to do a task once and then keep doing it until a specified condition is
no longer met.

Note that the while and do...while loops are different. Unlike the while loop, do...while will run
at least once whether or not the condition evaluates to true.

*/

// Write your code below
let cupsOfSugarNeeded = 0;
let cupsAdded = 0;
do  {
    cupsAdded++;
    console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

/*

### The break Keyword ###

In our code, when we want to stop a loop from continuing to execute even though the original
stopping condition we wrote for our loop hasn't been met, we can use the keyword break.

The break keyword allows programs to "break" out of the loop from within the loop's block.

break statements can be especially helpful when we are looping though large data structures. With
break, we can add test conditions besides the stopping condition, and exit the loop when they 
are met.

*/

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === "Notorious B.I.G.") {
        break;
    }
}
console.log("And if you don't know, now you know");

/*

### Review ###

1. Loops perform repetitive actions so we don't have to code that process manually every time.
2. How to write for loops with an iterator variable that increments or decrements.
3. How to use a for loop to iterator through an array.
4. A nested for loop is a loop inside another loop.
5. while loops allow for different types of stopping conditions.
6. Stopping conditions are crucial for avoiding infinite loops.
7. do...while loops run code at least once - only checking the stopping condition after the first
execution.
8. The break keyword allows programs to leave a loop during the execution of its block.

*/
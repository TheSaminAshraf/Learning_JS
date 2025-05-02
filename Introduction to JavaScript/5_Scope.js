/* eslint-disable no-unused-vars */
/*

### Scope ###

Scope defines where variables can be accessed or referenced. While some variables can be accessed
from anywhere within a program, other variables may only be available in a specific context.

### Block and Scope ###

We have seen blocks used before in functions and if statements. A block is the code found inside
a set of curly braces {}. Blocks help us group one or more statements together and serve as an
important structural marker for our code.

*/

const city = "New York City";
function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}
console.log(logCitySkyline());

/*

### Global Scope ###

Scope is the context in which our variables are declared. We think about scope in relation to
blocks because variables can exist either outside of or within these blocks.

In global scope, variables are declared outside of blocks. These variables are called global
variables. Because global variables are not bound inside a block, they can be accessed by any code
in the program, including code in blocks.

*/

let satellite = "The Moon";
let galaxy = "The Milky Way";
let stars = "North Star";
function callMyNightSky() {
  return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
}
console.log(callMyNightSky());

/*

### Block Scope ###

When a variable is defined inside a block, it is only accessible to the code within the curly
braces {}. We say that variable has block scope because it only accessible to the lines of code
within that block.

Variables that are declared with block scope are known as local variables because they are only
available to the code that is part of the same block.

*/

function logVisibleLightWaves()  {
    const lightWaves = "Moonlight";
    console.log(lightWaves);
}
logVisibleLightWaves();
//console.log(lightWaves); // Logs ReferenceError

/*

### Scope Pollution ###

When you declare global variables, they go to the global namespace. The global namespace allows the
variables to be accessible from anywhere in the program. These variables remain there until the
program finishes which means our global namespace can fill up really quickly.

Scope pollution is when we have too many global variables that exist in the global namespace, or
when we reuse variables across different scopes. Scope pollution makes it difficult to keep track
of our different variables and sets us up for potential accidents. For example, globally scoped
variables can collide with other variables that are more locally scoped, causing unexpected
behavior in our code.

*/

const satellite1 = 'The Moon';
const galaxy1 = 'The Milky Way';
let stars1 = 'North Star';

const callMyNightSky1 = () => {
  stars1 = "Sirius";
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

/*

### Practice Good Scoping ###

Tightly scoping your variables will greatly improve your code in several ways:

1. It will make your code more legible since the blocks will organize your code into discrete
sections.
2. It makes your code more understandable since it clarifies which variables are associated with
different parts of the program rather than having to keep track of them line after line.
3. It is easier to maintain your code, since your code will be modular.
4. It will save memory in your code because it will cease to exist after the block finishes 
running.

*/

const logVisibleLightWaves1 = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    // Add if statement here:
    if (region === "The Arctic")  {
      let lightWaves = "Northern Lights";
      console.log(lightWaves);
    }
    console.log(lightWaves);
};
  
logVisibleLightWaves1();

/*

### Review ###

1. Scope refers to where variables can be accessed throughout the program, and is determined by
where and how they are declared.
2. Blocks are statements that exist within curly braces {}.
3. Global scope refers to the context within which variables are accessible to every part of the
program.
4. Global variables are variables that exist within global scope.
5. BLock scope refers to the context within which variables are accessible only within the block
they are defined.
6. Local variables are variables that exist within block scope.
7. Global namespace is the space in our code that contains globally scoped information.
8. Scope pollution is when too many variables exist in a namespace or variables names are reused.

*/
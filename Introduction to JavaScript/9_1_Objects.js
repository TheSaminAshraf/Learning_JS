/* eslint-disable no-unused-vars */
/*

### Creating Object Literals ###

Objects can be assigned to variables just like any JavaScript type. We use curly braces {}, to
designate an object literal.

We fill an object with unordered data. This data is organized into key-value pairs. A key is like a
variable that holds a value. A key's value can be of any data type in the language including
functions or other objects.

We make a key-value pair by writing the key's name, or identifier, followed by a colon and then the
value. We separate each key-value pair in an object literal with a comma (,). Keys are strings, but
when we have a key that does not have any special characters in it, JavaScript allows us to omit
the quotation marks.

*/

let fasterShip = {
  color: "silver",
  "Fuel Type": "Turbo Fuel"
};

/*

### Accessing Properties ###

There are two ways we can access an object's property. The first way is the dot notation, (.).
With property dot notation, we write the object's name, followed by the dot operator and then
the property name (key).

*/

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

/*

### Bracket Notation ###

The second way to access a key's value is by using bracket notation, []. To use bracket notation to
access an object's property, we pass in the property name (key) as a string.

We must use bracket notation when accessing keys that have numbers, spaces, or special characters
in them. Without bracket notation in these situations, our code would throw an error.

With bracket notation you can also use a variable inside the brackets to select the keys of an
object. This can be especially helpful when working with functions.

*/

let spaceship1 = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
};

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship1["Active Mission"];
console.log(spaceship1[propName]);

/*

### Property Assignment ###

Objects are mutable meaning we can update them after we create them.

We can either use dot notation (.), or bracket notation ([]), and the assignment operator, = to add
new key-value pairs to an object or change an existing property.

One of two things can happen with property assignment:

1. If the property already exists on the object, whatever value it held before will be replaced
with the newly assigned value.
2. If there was no property with that name, a new property will be added to the object.

It's important to know that although we can't reassign an object declared with const, we can still
mutate it, meaning we can add new properties and change the properties that are there.

We can delete a property from an object with the delete operator.

*/

let spaceship2 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship2.color = "glorious gold";
spaceship2.numEngines = 10;

delete spaceship2["Secret Mission"];

/*

### Methods ###

When the data stored on an object is a function we call that a method. A property is what an object
has, while a method is what an object does.

We can create methods in our object literals by creating ordinary, colon-separated key-value pairs.
The key serves as our method's name, while the value is an anonymous function expression.

With the new method syntax introduced in ES6 we can omit the colon and the function keyword.

Object methods are invoked by appending the object's name with the dot operator followed by the
method name and parentheses.

*/

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat()  {
    console.log(retreatMessage);
  },
  takeOff()  {
    console.log("Spim... Borp... Glix... Blastoff!");
  }
};

alienShip.retreat();
alienShip.takeOff();

/*

### Nested Objects ###

In application code, objects are often nested— an object might have another object as a property
which in turn could have a property that’s an array of even more objects.

*/

let spaceship3 = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceship3.crew.captain["favorite foods"][0];
let person1 = {
  name: "John"
};
let person2 = {
  name: "Sam"
};
spaceship3.passengers = [person1, person2];
let firstPassenger = spaceship3.passengers[0];

/*

### Pass By Reference ###

Objects are passed by reference. This means when we pass a variable assigned to an object into a
function as an argument, the computer interprets the parameter name as pointing to the space in
memory holding that object. As a result, functions which change object properties actually mutate
the object permanently (even when the object is assigned to a const variable).

*/

let spaceship4 = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = obj => {
  obj["disabled"] = true;
};

greenEnergy(spaceship4);
remotelyDisable(spaceship4);

console.log(spaceship4);

/*

### Looping Through Objects ###

Loops are programming tools that repeat a block of code until a condition is met. We learned how
to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t
ordered. JavaScript has given us alternative solution for iterating through objects with the
for...in syntax.

*/

let spaceship5 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship5.crew) {
  console.log(`${crewMember}: ${spaceship5.crew[crewMember].name}`)
};

for (let crewMember in spaceship5.crew) {
  console.log(`${spaceship5.crew[crewMember].name}: ${spaceship5.crew[crewMember].degree}`)
};

/*

### Review ###

1. Objects store collections of key-value pairs.
2. Each key-value pair is a property—when a property is a function it is known as a method.
3. An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
4. You can access, add or edit a property within an object by using dot notation or bracket
notation.
5. We can add methods to our object literals using key-value syntax with anonymous function
expressions as values or by using the new ES6 method syntax.
6. We can navigate complex, nested objects by chaining operators.
7. Objects are mutable — we can change their properties even when they’re declared with const.
8. Objects are passed by reference — when we make changes to an object passed into a function,
those changes are permanent.
9. We can iterate through objects using the For...in syntax.

*/
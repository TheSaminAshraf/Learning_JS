/* eslint-disable no-unused-vars */
/*

### Introduction to Iterators ###

The built-in JavaScript array methods that help us iterate are called iteration methods, at times
referred to as iterators. Iterators are methods called on arrays to manipulate elements and return
values.

*/

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

/*

### The .forEach() Method ###

The first iteration method we will learn is .forEach(). Aptly named, .forEach() will execute the
same code for each element of an array.

It's good to be aware of the different ways to pass in callback functions as arguments in iterators
because developers have different stylistic preferences.

*/

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));

/*

### The .map() Method ###

When .map() is called on an array, it takes an argument of a callback function and returns a new
array.

.map() works in a similar manner to .forEach() - the major difference is that .map() returns a new
array.

*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumber => {
    return bigNumber / 100
});

/*

### The .filter() Method ###

Another useful iterator method .filter(). Like .map(), .filter() returns a new array. However,
.filter() returns an array of elements after filtering out certain elements from the original
array. The callback function for the .filter() method should return true or false depending on
the element that is passed to it. The elements that cause the callback function to return true
are added to the new array.

*/

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers1 = randomNumbers.filter(number => {
  return number < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
})

/*

### The .findIndex() Method ###

We sometimes want to find the location of an element in an array. That's where the .findIndex()
method comes in. Calling .findIndex() on an array will return the index of the first element that
evaluates to true in the callback function.

*/

const animals1 = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals1.findIndex(animal => {
  return animal === "elephant";
});
const startsWithS = animals1.findIndex(animal => {
  return animal[0] === "s";
});

/*

### The .reduce() Method ###

The .reduce() method returns a single value after iterating through the elements of an array,
thereby reducing the array. 

The .reduce() method can also take an optional second parameter to set an initial value for
accumulator (remember, the first argument is the callback function).

*/

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

/*

### Iterator Documentation ###

MDN's Array iteration methods page: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods

The documentation for each method contains several sections:

1. A short definition.
2. A block with the correct syntax for using the method.
3. A list of parameters the method accepts for requires.
4. The return value of the function.
5. An extended description.
6. Examples of the method's use.
7. Other additional information.

*/

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter(word => {
  return word.length > 5;
});

console.log(interestingWords.every(word => {
  return word.length > 5;
}));

/*

### Choose the Right Iterator ###

*/

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
// OR nums.some(num => num < 0);

/*

### Review ###

1. .forEach() is used to execute the same code on every element in an array but does not change
the array and returns undefined.
2. .map() executes the same code on every element in an array and returns a new array with the
updated elements.
3. .filter() checks every element in an array to see if it meets certain criteria and returns a new
array the elements that return truthy for the criteria.
4. .findIndex() returns the index of the first element of an array that satisfies a condition in
the callback function. It returns -1 if none of the elements in the array satisfies the condition.
5. .reduce() iterates through an array and takes the values of the elements and returns a single
value.
6. All iterator methods take a callback function, which can be a pre-defined function, a function
expression, or an arrow function.

*/
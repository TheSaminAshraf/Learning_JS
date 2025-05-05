/* eslint-disable no-unused-vars */
/*

### Arrays ###

Organizing and storing data is a foundational concept of programming.

Arrays are JavaScript's way of making lists. Arrays can store any data types (including strings,
numbers and booleans). Like lists, arrays can be ordered, meaning each item has a numbered
position.

*/

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
console.log(newYearsResolutions);

/*

### Create an Array ###

One way we can create an array is to use an array literal. An array literal creates an array by
wrapping items in square brackets []. Arrays can store any data type - we can have an array that
holds all the same data types or an array that holds different data types.

1. An array is represented by the square brackets [] and the content inside.
2. Each content item inside an array is called an element.

We can also save an array to a variable.

*/

const hobbies = ["coding", "typing", "reading"];
console.log(hobbies);

/*

### Accessing Elements ###

Each element in an array has a numbered position known as its index. We can access individual
items using their index, which is similar to referencing an item in a list based on the item's
position.

Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1.
Therefore, the first item in an array will be at position 0.

*/

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
//console.log(famousSayings[3]); // Returns undefined

/*

### Update Elements ###

We can update an array the same way we access an item in an array.

*/

let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = "avocados";

/*

### Arrays with let and const ###

Variables declared with the const keyword cannot be reassigned. However, elements in an array
declared with const remain mutable. Meaning that we can change the contents of a const array, but
cannot reassign a new array or a different value.

*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = "Mayo";
console.log(condiments);
condiments = ["Mayo"];
console.log(condiments);

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
utensils[3] = "Spoon";
console.log(utensils);
//utensils = "Spoon"; // Error

/*

### The .length property ###

One of an array's built-in properties is length and it returns the number of items in an array. We
access the .length property just like we do with strings.

*/

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

/*

### The .push() Method ###

One array method in JavaScript is the .push() method. It allows us to add items to the end of an
array.

*/

const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push("wash", "clean");
console.log(chores);

/*

### The .pop() Method ###

Another array method, .pop() removes the last item of an array. When you need to mutate an array
by removing the last element, use .pop().

*/

const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores1.pop();
console.log(chores1);

const newItemTracker = ['item 0', 'item 1', 'item 2'];
const removed = newItemTracker.pop();
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

/*

### More Array Methods ###

Codecademy JavaScript Arrays Documentation: https://www.codecademy.com/resources/docs/javascript/arrays

Some array methods that are available to JavaScript developers include: .join(), .splice(),
.shift(), .unshift(), and .concat() amongst many others. Using these built-in methods makes it
easier to do some common tasks when working with arrays.

*/

const groceryList1 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList1.shift();
console.log(groceryList1);
groceryList1.unshift("popcorn");
console.log(groceryList1);
console.log(groceryList1.slice(1,4));
console.log(groceryList1);
const pastaIndex = groceryList1.indexOf("pasta");
console.log(pastaIndex);

/*

### Arrays and Functions ###

When you pass an array into a function, if the array is mutated inside the function, that change
will be maintained outside the function as well. 

*/

const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);
function removeElement(newArr)  {
  newArr.pop();
}
removeElement(concept);
console.log(concept);

/*

### Nested Arrays ###

Arrays can store other arrays. When an array contains another array it is known as a nested array.
To access the nested arrays we can use bracket notation with the index value, just like we did to
access any other element.

*/

let numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];

/*

### Review ###

1. Arrays are lists that store data in JavaScript.
2. Arrays are created with brackets [].
3. Each item inside of an array is at a numbered position, or index, starting at 0.
4. We can access one item in an array using its index, with syntax like myArray[0].
5. We can also change an item in an array using its index, with syntax like myArray[0] = "New str"
6. Arrays have a length property, which allows you to see how many items are in an array.
7. Arrays have their own methods, including .push() and .pop(), which add and remove items from an
array, respectively.
8. Arrays have many methods that perform different tasks, such as .slice() and .shift().
9. Some built-in methods are mutating, meaning the method will change the array, while others are
not mutating.
10. Variables that contain arrays can be declared with let or const. Even when declared with const,
arrays are still mutable. However, a variable declared with const cannot be reassigned.
11. Arrays mutated inside of a function will keep that change even outside the function.
12. Arrays can be nested inside other arrays.
13. To access elements in nested arrays chain indices using bracket notation.

*/
/*

### Advanced Objects Introduction ###

Objects in JavaScript are containers that store data and functionality. We will be covering the
following topics:

1. how to use the this keyword.
2. conveying privacy in JavaScript methods.
3. defining getters and setters in JavaScript.
4. creating factory functions.
5. using destructuring techniques.

### The this Keyword ###

Objects are collections of related data and functionality. We store that functionality in methods
on our objects.

The this keyword references the calling object which provides access to the calling object's
properties.

*/

const robot = {
  model: "1E78V2",
  energyLevel: 100,
  provideInfo() {
    return(`I am ${this.model} and my current energy level is ${this.energyLevel}.`)
  }
};
console.log(robot.provideInfo());

/*

### Arrow Functions and this ###

If we use the this keyword in a method then the value of this is the calling object. However, it
becomes a bit more complicated when we start using arrow functions for methods.

Arrow functions inherently bind, or tie, an already defined this value to the function itself that
is NOT the calling object.

The key takeaway from the example above is to avoid using arrow functions when using this in a
method.

*/

const robot1 = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot1.checkEnergy();

/*

### Privacy ###

Accessing and updating properties is fundamental in working with objects. However, there are
cases in which we don’t want other code simply accessing and updating an object’s properties.
When discussing privacy in objects, we define it as the idea that only certain properties should
be mutable or able to change in value.

Certain languages have privacy built-in for objects, but JavaScript does not have this feature.
Rather, JavaScript developers follow naming conventions that signal to other developers how to
interact with a property. One common convention is to place an underscore _ before the name of
a property to mean that the property should not be altered.

Getters can return the value of internal properties and setters can safely reassign property
values.

*/

const robot2 = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robot2._energyLevel = "high";
robot2.recharge();

/*

### Getters ###

Getters are methods that get and return the internal properties of an object.

Some notable advantages of using getter methods:

1. Getters can perform an action on the data when getting a property.
2. Getters can return different values using conditionals.
3. In a getter, we can access the properties of the calling object using this.
4. The functionality of our code is easier for other developers to understand.

Another thing to keep in mind when using getter (and setter) methods is that properties cannot
share the same name as the getter/setter function. If we do so, then calling the method will
result in an infinite call stack error. One workaround is to add an underscore before the property
name.

*/

const robot3 = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return (`My current energy level is ${this._energyLevel}`);
    } else {
      return ("System malfunction: cannot retrieve energy level");
    }
  }
};
console.log(robot3.energyLevel);

/*

### Setters ###

Along with getter methods, we can also create setter methods which reassign values of existing
properties within an object.

Setter methods do not need to be called with a set of parentheses.

Like getter methods, there are similar advantages to using setter methods that include checking
input, performing actions on properties, and displaying a clear intention for how the object is
supposed to be used. Nonetheless, even with a setter method, it is still possible to directly
reassign properties.

*/

const robot4= {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  }
};
robot4.numOfSensors = 100;
console.log(robot4.numOfSensors);

/*

### Factory Functions ###

A factory function is a function that returns an object and can be reused to make multiple object
instances. Factory functions can also have parameters allowing us to customize the object that gets
returned.

*/

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log("Beep Boop");
    }
  }
};
const tinCan = robotFactory("P-500", true);
tinCan.beep();

/*

### Property Value Shorthand ###

We can use a destructuring technique, called property value shorthand, to assign values to
properties.

*/

const robotFactory1 = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory1('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

/*

### Destructured Assignment ###

We often want to extract key-value pairs from objects and save them as variables.

We can take advantage of a destructuring technique called destructured assignment to extract the
value of a property and save it to a variable. In destructured assignment we create a variable
with the name of an object’s key that is wrapped in curly braces { } and assign to it the object.

We can even use destructured assignment to grab nested properties of an object.

*/

const robot5 = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
const {functionality} = robot5;
functionality.beep();

/*

### Built-in Object Methods ###

MDN's object instance documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods

*/

const robot6 = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot6);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot6);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot1 = Object.assign({laserBlaster: true, voiceRecognition: true}, robot6);

console.log(newRobot1);

/*

### Review ###

1. The object that a method belongs to is called the calling object.
2. The this keyword refers to the calling object and can be used to access the properties of the
calling object.
3. Methods do not automatically have access to other internal properties of the calling object.
4. The value of this depends on where the this is being accessed from.
5. We cannot use arrow functions as methods if we want to access other internal properties.
6. JavaScript objects do not have built-in privacy, rather there are conventions to follow to 
notify other developers about the intent of the code.
7. The usage of an underscore before a property name means that the original developer did not
intend for that property to be directly changed.
8. Setters and getter methods allow for more detailed ways of accessing and assigning properties.
9. Factory functions allow us to create object instances quickly and repeatedly.
10. There are different ways to use object destructuring: one way is the property value shorthand
and another is destructured assignment.
11. As with any concept, it is a good skill to learn how to use the documentation with objects.

*/
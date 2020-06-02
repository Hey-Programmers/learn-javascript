# Obnoxious Objects

Still more exercises on JavaScript objects!

Before you start this exercise, make sure you have watched the lecture first.

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

Practice, practice, practice, practice.

-AZ

## Instructions

Create a new folder named `C_objects_exercise`, this is where you'll save all of your files. Solve
each of the prompts below. Create a new file for each prompt and execute your code to see if it
matches the example output.

### greatestPopulation

Create a `greatest-population.js` file and solve the function below:

```js
// Write a function `greatestPopulation` that accepts an array of country objects as an argument.
// The function should return the name of the country that has the largest population.
// You can assume that the array contains at least one country.

let countries1 = [
  { name: "Cameroon", population: 27744989, gdp: 38.68 },
  { name: "Belarus", population: 9477918, gdp: 59.66 },
  { name: "Indonesia", population: 267026366, gdp: 1042 },
  { name: "Guyana", population: 750204, gdp: 3.88 },
];

console.log(greatestPopulation(countries1)); // 'Indonesia'

let countries1 = [
  { name: "New Zealand", population: 4925477, gdp: 204.9 },
  { name: "Mozambique", population: 30098197, gdp: 14.72 },
  { name: "Greenland", population: 57616, gdp: 2.71 },
  { name: "Kazakhstan", population: 19091949, gdp: 179.3 },
  { name: "Burma", population: 56590071, gdp: 71.21 },
];

console.log(greatestPopulation(countries2)); // 'Burma'
```

### pluck

Create a `pluck.js` file and solve the function below:

```js
// Write a function `pluck` that accepts an object and an array of strings as an argument. The function
// should return a new object containing the keys of the original object that are found in the array.

console.log(pluck({name: 'Fido', color: 'Brown', breed: 'German Shepherd'}, ['name', 'breed']));
// { name: 'Fido', breed: 'German Shepherd' }

console.log(pluck({ make: 'Tesla', mpg: 93 , model: 'Model X', color: 'white'  }, ['make', 'model']));
// {  make: 'Tesla', model: 'Model X' }
```

### objectAdd

Create a `object-add.js` file and solve the function below:

```js
// Write a function `objectAdd` that accepts two objects as arguments. The function should return 
// a new object containing the same keys as the object arguments. If a key is found in both
// objects, its corresponding value should be the sum of the values in the object arguments. If a key 
// is only found in one of the objects, then it's corresponding value should be the same as that one 
// object.

let obj1 = { x: 3, y: 10};
let obj2 = { y: 2, x: 1};
console.log(objectAdd(obj1, obj2)); // { x: 4, y: 12 } 

let obj3 = { a: 3, b: 2, c: -1};
let obj4 = { b: 5, c: 1, e: 4};
console.log(objectAdd(obj3, obj4)); // { a: 3, b: 7, c: 0, e: 4 }
```

### secretCipher

Create a `secret-cipher.js` file and solve the function below:

```js
// Write a function `secretCipher` that accepts a string and an object as arguments. The function
// should return a new string where characters of the original string are replaced with their
// corresponding values in the object. If a character of the string does not exist as a key of the
// object, then it should be replaced with a question mark (?).

console.log(secretCipher("jello", { j: "r", l: "s", e: "i" })); // 'riss?'
console.log(secretCipher("lantern", { e: "o", l: "p", n: "m", r: "j" })); // 'p?m?ojm'
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

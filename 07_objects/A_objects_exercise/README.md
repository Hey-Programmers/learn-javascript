# An Objective Perspective

_Objects_ are a construct programmers use to represent entities and the properties they possess.
Whereas arrays use numbers to index their values, _objects_ use strings to index their values. These
strings are referred to as _keys_.

Before you start this exercise, make sure you have watched the lecture first.

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

As you grow into a web developer, you'll be dealing with objects a **ton**. I also like teaching
objects because I get to use obscure references in my examples.

-AZ

## 0. Objects In Mirror Are Closer Then They Appear.

Create a new folder named `A_objects_exercise`, this is where you'll save all of your files. Predict
what would print when executing each of the snippets below. Test your prediction by typing the
snippet into their own files and executing the program. Don't copy and paste.

Write the below code into a file named `snippet-1.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 1
let movie = {
  title: "Fight Club",
  year: 1999,
  genre: ["drama", "thriller"],
  starring: ["Brad Pitt", "Edward Norton"],
};

console.log(movie.year);
console.log(movie["title"]);
console.log(movie.genre);
console.log(movie.genre[0]);
console.log(movie.genre[1]);

console.log(movie.duration);
console.log(movie["starring"][1]);
console.log(movie.starring.length);
```

Write the below code into a file named `snippet-2.js`. Make a prediction for what it will print. Run

```js
// snippet 2
let restaurant = {
  name: "Bob's Burgers",
  location: "123 Ocean Avenue",
  owners: ["Bob Belcher", "Linda Belcher"],
  established: 2011,
  menu: ["burgers", "fries", "shakes"],
};

console.log("owners" in restaurant);
console.log("employees" in restaurant);

let someKey = "menu";
console.log(someKey in restaurant);

console.log(restaurant.menu);
console.log(restaurant["menu"]);
console.log(restaurant[someKey]);
console.log(restaurant.someKey);

console.log(restaurant.menu.includes("fries"));
```

Write the below code into a file named `snippet-3.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 3
let dog = {
  name: "Manny",
  age: 5,
  breed: "pug",
  color: "fawn",
  favoriteFoods: ["bacon"],
};

console.log(dog.age);
console.log(dog.breed);
console.log(dog.favoriteFoods);

dog.age++;
dog.breed = dog.breed.toUpperCase();
dog.favoriteFoods.push("sausage");

console.log(dog.age);
console.log(dog.breed);
console.log(dog.favoriteFoods);

for (let property in dog) {
  console.log(property + " is " + dog[property]);
}
```

Write the below code into a file named `snippet-4.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 4
let recipe = {
  name: "Old Fashioned Pancakes",
  difficulty: "easy",
  tasty: true,
  ingredients: ["eggs", "milk", "butter", "flour", "sugar"],
};

console.log(recipe.name);
console.log(recipe["name"]);
console.log(recipe.ingredients.length);
console.log(recipe.calories);

let someVariable = "difficulty";
console.log(recipe[someVariable]);
console.log(recipe.someVariable);

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}
```

## 1. I Object, Your Honor.

In this section of the exercise you'll be prompted to write a function to accomplish a specific
task. Read the description and look at the example output to figure out what should be implemented
within the function. Write each function to a separate file in the `A_objects_exercise` folder and
test your work by running the file.

### emailParse

Create a `email-parse.js` file and solve the function below:

```js
// Create a function `emailParse` that accepts an email address string as an argument. The function
// should return an object containing `username` and `domain` as keys. See the examples.
// You can assume that the argument will be a valid email address.

console.log(emailParse("coolcoder42@goodmail.com"));
// { username: 'coolcoder42', domain: 'goodmail.com' }

console.log(emailParse("az@woohoomail.com"));
// { username: 'az', domain: 'woohoomail.com' }

console.log(emailParse("1337pr0graMmer@coldmail.edu"));
// { username: '1337pr0graMmer', domain: 'coldmail.edu' }
```

### keyPair

Create a `key-pair.js` file and solve the function below:

```js
// Write a function `keyPair(obj1, obj2, key)` that accepts two objects and a key string as arguments.
// The function should return an array containing the values of the given key in `obj1` and `obj2`.
// See the examples.

let cat1 = { name: "jinkee", breed: "calico" };
let cat2 = { name: "garfield", breed: "red tabby" };
console.log(keyPair(cat1, cat2, "breed")); // [ 'calico', 'red tabby' ]
console.log(keyPair(cat1, cat2, "name")); // [ 'jinkee', 'garfield ]

let sport1 = { name: "volleyball", team: true };
let sport2 = { name: "golf", team: false };
console.log(keyPair(sport1, sport2, "team")); // [ true, false ]
```

### elementQuantities

Create a `element-quantities.js` file and solve the function below:

```js
// Create a function `elementQuantities` that accepts an object as an argument. The object contains
// elements as keys and quantities as values. The function should return an array containing the elements
// appearing with the correct quantities. See the examples.

let quantities1 = { cat: 3, bird: 1, dog: 2 };
console.log(elementQuantities(quantities1)); // ['cat', 'cat', 'cat', 'bird, 'dog', 'dog']

let quantities2 = { blue: 3, brown: 1 };
console.log(elementQuantities(quantities2)); // ['blue', 'blue', 'blue', 'brown']
```

### maxObjectValue

Create a `max-object-value.js` file and solve the function below:

```js
// Write a function `maxObjectValue` that accepts an object as an argument. Write a function that
// returns an array containing the key, value pair for the largest value within the object. You can
// assume that all values are numbers and there are no ties.

console.log(maxObjectValue({ a: 5, b: 2, c: 6, d: 7, e: 4 })); // ['d', 7]
console.log(maxObjectValue({ lychee: 11, rambutan: 13, papaya: 9 })); // ['rambutan', 13]
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

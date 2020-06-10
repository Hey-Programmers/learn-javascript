# Native Callback Methods Exercise

There are a handful of useful array methods utilizing callbacks that are built into JavaScript. The
`forEach`, `map`, `filter`, `every`, and `some` methods can implement common patterns
quickly. These methods can greatly clean up our code if we master their usage.

In my experience teaching, students are somewhat resistant to learning this new topic because they
can "solve" these same problems utilizing just the basics that they are already comfortable with.
You _could_ forgo these methods in favor of manually implementing the target behavior with a
nothing-fancy loop, however these methods will become very useful if you have the patience to learn
them. They are also a fairly common topic in software engineering job interviews. There is much
discomfort that comes with learning something new. Practice until it's comfortable.

-AZ

### 0. Interpret.

Create a new folder named `A_native_callback_methods_exercise`, this is where you'll save all of
your files. Predict what would print when executing each of the snippets below. Test your prediction
by typing the snippet into their own files and executing the program. Don't copy and paste.

Write the below code into a file named `snippet-1.js`. Make a prediction for what it will print. Run
it.

```js
// snippet-1
let foo = function (s) {
  return s.slice(1).toUpperCase();
};

let arr = ['mashy', 'brando', 'thanasi'];
let res = arr.map(foo);
console.log(res);
```

```js
// snippet-2
let friends = ['nader', 'matty', 'jennifer', 'lora'];

let chosen = friends[0];

friends.forEach(function (friend) {
  if (friend.length > chosen.length) {
    chosen = friend;
  }
});

console.log(chosen);
```

```js
// snippet-3
let isEven = function (n) {
  return n % 2 === 0;
};

let isOdd = function (n) {
  return !isEven(n);
};

let nums1 = [42, 3, 8, 9];
console.log(nums1.filter(isEven));
console.log(nums1.map(isOdd));
```

```js
// snippet-4
let doggos = [
  { name: 'bella', type: 'canine', age: 4, breed: 'yorkshire terrier' },
  { name: 'manny', type: 'canine', age: 2, breed: 'pug' },
  { name: 'yoshi', type: 'canine', age: 3, breed: 'german shepherd' },
  { name: 'blossom', type: 'canine', age: 3, breed: 'german shepherd' }
];

let result1 = doggos.every(function (ele) {
  return ele.type === 'canine';
});

console.log(result1);

let result2 = doggos.every(function (ele) {
  return ele.breed === 'german shepherd';
});

console.log(result2);

let result3 = doggos.some(function (ele) {
  return ele.breed === 'german shepherd';
});

console.log(result3);

let isOld = function (person) {
  return person.age > 5;
};

let result4 = doggos.some(isOld);

console.log(result4);
```

### 1. Solve.

Solve each of the prompts below. Create a new file for each prompt and execute your code to see if it
matches the example output.

### forEachSum

Create a `for-each-sum.js` file and solve the function below:

```js
// Write a function `forEachSum` that accepts an array of numbers as an argument and returns the total
// sum of all numbers.
// Your function must utilize the native Array#forEach method.

console.log(forEachSum([10, 3, 5])); // 18
console.log(forEachSum([-6, 7, 9, 4])); // 14
console.log(forEachSum([])); // 0
```

### pickAdults

Create a `pick-adults.js` file and solve the function below:

```js
// Write a function `pickAdults` that accepts an array of person objects and returns the objects that 
// have an age of at least 18.
// Your function must utilize the native Array#filter method.

let people = [
  { name: 'alice', age: 22 },
  { name: 'bob', age: 37 },
  { name: 'pam', age: 16 },
  { name: 'jim', age: 18 }
];
console.log(pickAdults(people)); 
// [ { name: 'alice', age: 22 }, { name: 'bob', age: 37 }, { name: 'jim', age: 18 } ]

let people2 = [
  { name: 'betty', age: 23 },
  { name: 'ben', age: 15 },
  { name: 'yansi', age: 21 }
];
console.log(pickAdults(people2)); 
// [ { name: 'betty', age: 23 }, { name: 'yansi', age: 21 } ]
```

### wordMap

Create a `word-map.js` file and solve the function below:

```js
// Write a function `wordMap` that accepts a sentence string and an object as arguments. The function
// should return a new sentence where words that exist as keys in the object are replaced with their
// corresponding values.
// Your function must utilize the native Array#map method.

console.log(wordMap('open the pod bay doors', {pod: 'ship', open: 'close'})); 
// 'close the ship bay doors'

console.log(wordMap('breakfast food is good', {breakfast: 'brunch', good: 'great'})); 
// 'brunch food is great'
```

### commonElements

Create a `common-elements.js` file and solve the function below:

```js
// Write a function `commonElements` that accepts two arrays as arguments. The function should
// return a new array containing the elements that are found in both input arrays.
// Your function must utilize the native Array#filter method.

console.log(commonElements(['a', 'b', 'c'], ['c', 'a'])); // ['a', 'c']
console.log(commonElements(['cat', 'dog', 'mouse', 'fish'], ['dog', 'rat'])); // ['dog']
console.log(commonElements(['skip', 'jump'], ['swim', 'hop'])); // []
```


### getInitials

Create a `get-initials.js` file and solve the function below:

```js
// Write a function `getInitials` that accepts an array of students as an argument. The function should
// return an array containing the initials of each student.
// Your function must utilize the native Array#map method.

let students1 = [
  { first: 'ada', last: 'yonath', subject: 'chemistry' },
  { first: 'nelly', last: 'sachs', subject: 'literature' },
  { first: 'rosalyn', last: 'yallow', subject: 'medicine' }
];
console.log(getInitials(students1)); // ['AY', 'NS', 'RY']


let students2 = [
    { first: 'margaret', last: 'knight' },
    { first: 'ellen', last: 'ochoa' },
];
console.log(getInitials(students2)); // ['MK', 'EO']
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

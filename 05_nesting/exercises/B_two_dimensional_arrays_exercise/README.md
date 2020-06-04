# Adding a New Dimension

A _two-dimensional array_ is an array that contains other arrays as elements. Programmers use
multidimensional arrays when dealing with data that has many layers. It is also useful to represent
a grid space.

Before you start this exercise, make sure you have watched the lecture first.

+ [Lecture](https://youtu.be/CDpJ4PIWAlE)

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

+ [Walkthrough](https://youtu.be/ajSXu2D2gzg)

Loops in loops? Arrays in arrays? What's next, functions in functions?

-AZ

## Instructions

Create a new folder named `B_two_dimensional_arrays_exercise`, this is where you'll save all of your
files. Solve each of the prompts below. Create a new file for each prompt and execute your code to
see if it matches the example output.

Heads up. Not all of the problems below require 2D arrays. It's up to you to figure out what is the
right tool for the job.

### print2d

Create a `print-2d.js` file and solve the function below:

```js
// Write a function `print2d` that accepts a two-dimensional array as an argument. The function
// should print all inner elements of the array.

let array1 = [
  ["a", "b", "c", "d"],
  ["e", "f"],
  ["g", "h", "i"],
];
print2d(array1);
// prints
//  a
//  b
//  c
//  d
//  e
//  f
//  g
//  h
//  i

let array2 = [[9, 3, 4], [11], [42, 100]];
print2d(array2);
// prints
//  9
//  3
//  4
//  11
//  42
//  100
```

### makeMatrix

Create a `make-matrix.js` file and solve the function below:

```js
// Write a function `makeMatrix(m, n, value)` that accepts three arguments. The function should return
// a 2-dimensional array of height `m` and width `n` that contains the `value` as every element.

console.log(makeMatrix(3, 5, null));
// [
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ],
//   [ null, null, null, null, null ]
// ]

console.log(makeMatrix(4, 2, "x"));
// [
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ],
//   [ 'x', 'x' ]
// ]

console.log(makeMatrix(2, 2, 0));
// [
//   [ 0, 0 ],
//   [ 0, 0 ]
// ]
```

### totalProduct

Create a `total-product.js` file and solve the function below:

```js
// Write a function `totalProduct(array)` that accepts a 2D array of numbers. The function should return
// the total product of all numbers in the array.

let array1 = [
  [3, 5, 2],
  [6, 2],
];
console.log(totalProduct(array1)); // 360

let array2 = [
  [4, 6],
  [2, 3],
  [1, 2],
];
console.log(totalProduct(array2)); // 288
```

### twoSumPairs

Create a `two-sum-pairs.js` file and solve the function below:

```js
// Write a function `twoSumPairs(numbers, target)` that accepts an array of numbers and a target number
// as arguments. The function should return a 2D array containing all unique pairs of elements that
// sum to the target.

console.log(twoSumPairs([2, 3, 4, 6, 5], 8)); // [ [2, 6], [3, 5] ]
console.log(twoSumPairs([10, 7, 4, 5, 2], 12)); // [ [10, 2], [7, 5] ]
console.log(twoSumPairs([3, 9, 8], 11)); // [ [3, 8] ]
console.log(twoSumPairs([3, 9, 8], 10)); // [ ]
```

### zipper

Create a `zipper.js` file and solve the function below:

```js
// Write a function `zipper` that accepts two arrays as arguments. The function should return a 2D
// array containing pairs of elements at the same indices. You can assume that the arrays have the 
// same length.

let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

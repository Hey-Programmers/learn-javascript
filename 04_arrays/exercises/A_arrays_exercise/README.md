# All Programmers Need a Raise

_Arrays_ are a construct that programmers use to store related values in a single variable. An
_array_ contains one or more _elements_.

Before you start this exercise, make sure you have watched the lecture first.

+ [Lecture](https://youtu.be/ekVhX_HfbBE)

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

+ [Walkthrough](https://youtu.be/mibav-eq9EY)

New programmers often ask why the first index is 0 and not 1. Let's go half on it. 0.5?

-AZ

## Instructions

Create a new folder named `A_arrays`, this is where you'll save all of your files. Solve each of the
prompts below. Create a new file for each prompt and execute your code to see if it matches the
example output.

### total

Create a `total.js` file and solve the function below:

```js
// Write a function `total` that accepts an array of numbers as an argument. The function should return
// the total sum of all elements of the array.

console.log(total([3, 2, 8])); // 13
console.log(total([-5, 7, 4, 6])); // 12
console.log(total([7])); // 7
console.log(total([])); // 0
```

### stayPositive

Create a `stay-positive.js` file and solve the function below:

```js
// Write a function `stayPositive` that accepts an array of numbers as an argument. The function should
// return an array containing only the positive numbers.

console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []
```

### bleepVowels

Create a `bleep-vowels.js` file and solve the function below:

```js
// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'
```

### filterLongWords

Create a `filter-long-words.js` file and solve the function below:

```js
// Write a function `filterLongWords` that accepts an array of strings as an argument. The function
// should return a new array containing only the strings that are less than 5 characters long.

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']
```

### numOdds

Create a `num-odds.js` file and solve the function below:

```js
// Write a function `numOdds` that accepts an array of numbers as an argument. The function should
// return a number representing the count of odd elements in the array.

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0
```

### stringsToLengths

Create a `strings-to-lengths.js` file and solve the function below:

```js
// Write a function `stringsToLengths` that accepts an array of strings as an argument. The function
// should return a new array containing the lengths of the elements of the original array.

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]
```

### divisors

Create a `divisors.js` file and solve the function below:

```js
// Write a function `divisors` that accepts a number as an argument. The function should return an
// array containing all positive numbers that can divide into the argument.

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

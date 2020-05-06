# Dividing and Conquering

_Decomposition_ is a pattern that programmers use to take a complex problem and break it down into
smaller sub-problems that can be managed better individually.

Before you start this exercise, make sure you have watched the lecture first.

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

This is might be my favorite topic. I think it's very high leverage because it is relatively easy to
implement but greatly increases the elegance of your code. Prefer to solve complex problems with
simple solutions.

-AZ

## 0. Composition

Create a new folder named `A_decomposing_problems_exercise`, this is where you'll save all of your
files. Predict what would print when executing each of the snippets below. Test your prediction by
typing the snippet into their own files and executing the program. Don't copy and paste.

Write the below code into a file named `snippet-1.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 1

let flim = function () {
  console.log("leak");
  flam();
  console.log("geek");
};

let flam = function () {
  console.log("beak");
  console.log("sneak");
};

flim();
```

Write the below code into a file named `snippet-2.js`. Make a prediction for what it will print. Run
it.

```js
let alice = function (n) {
  for (let i = 0; i <= n; i++) {
    bob(i);
  }
};

let bob = function (n) {
  if (n % 2 === 0) {
    console.log("good");
  } else {
    console.log("bad");
  }
};

alice(4);
```

Write the below code into a file named `snippet-3.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 3

let foo = function () {
  for (let i = 0; i < 5; i++) {
    console.log("i = " + i);
    bar();
  }
};

let bar = function () {
  for (let j = 0; j < 5; j++) {
    console.log("  j = " + j);
  }
};

foo();
```

## 1. Decomposition

In this section of the exercise you'll be prompted to write a function to accomplish a specific
task. Read the description and look at the example output to figure out what should be implemented
within the function. Write each function to a separate file in the `A_decomposing_problems_exercise`
folder and test your work by running the file.

Some (but not all) of the problems below should be decomposed with a helper function.

### doubleVowel

Create a `double-vowel.js` file and solve the function below:

```js
// Write a function `doubleVowel` that accepts a string as an argument. The function should return
// the string where every occurrence of a vowel in the original string is repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

console.log(doubleVowel("runner")); // 'ruunneer'
console.log(doubleVowel("stoplight")); // 'stoopliight'
console.log(doubleVowel("gardener")); // 'gaardeeneer'
```

### funnyPhrase

Create a `funny-phrase.js` file and solve the function below:

```js
// Write a function `funnyPhrase` that accepts a sentence string as an argument. The function should
// return the sentence where every other word has its vowels repeated twice consecutively.
// Vowels are the letters a, e, i, o, u.

console.log(funnyPhrase("she dreamed of being a runner")); // 'she dreeaameed of beeiing a ruunneer'
console.log(funnyPhrase("park near the stoplight")); // 'park neeaar the stoopliight'
console.log(funnyPhrase("we need many gardeners")); // 'we neeeed many gaardeeneers'
```

### isPrime

Create an `is-prime.js` file and solve the function below:

```js
// Write a function `isPrime` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the given number is prime. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.
//
// For example, 11 is a prime because it is only divisible by 1 and 11.
// For example, 8 is not a prime because it is divisible by 1, 2, 4, and 8

console.log(isPrime(11)); // true
console.log(isPrime(8)); // false
console.log(isPrime(7)); // true
console.log(isPrime(21)); // false
console.log(isPrime(2)); // true
console.log(isPrime(15)); // false
console.log(isPrime(1)); // false
```

### pickPrimes

Create a `pick-primes.js` file and solve the function below:

```js
// Write a function `pickPrimes` that accepts an array of numbers as an argument. The function should
// return an array containing only the prime numbers. A prime number is a number that is
// only divisible by 1 and itself. The smallest prime number is 1.

console.log(pickPrimes([12, 3, 7, 18, 11])); // [3, 7, 11]
console.log(pickPrimes([17, 23, 9, 42])); // [17, 23]
console.log(pickPrimes([4, 2048, 100, 55])); // []
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

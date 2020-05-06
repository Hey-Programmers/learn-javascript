# Problems Make Perfect

More problems `===` more practice.

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

I'll keep writing problems if you keep coding. Deal?

-AZ

## Instructions

Create a new folder named `C_more_problems`, this is where you'll save all of your files. Solve each
of the prompts below. Create a new file for each prompt and execute your code to see if it matches
the example output.

This problem set tests a few different concepts. Any concepts we've covered are fair game. Some of
the following problems are tough, but they only require knowledge of concepts we've already covered.
Give them a shot.

### removeDupes

Create a `remove-dupes.js` file and solve the function below:

```js
// Write a function `removeDupes` that accepts an array as an argument. The function should return a
// new array where each element only appears once.

console.log(removeDupes(["x", "y", "y", "x", "z"])); // ['x', 'y', 'z']
console.log(removeDupes([false, false, true, false])); // [false, true]
console.log(removeDupes([42, 5, 7, 42, 7, 3, 7, 7])); // [42, 5, 7, 3]
```

### removeVowels

Create a `remove-vowels.js` file and solve the function below:

```js
// Write a function `removeVowels` that accepts a string as an argument. The function should return
// a version of the string where all vowels are removed.

console.log(removeVowels("jello")); // jll
console.log(removeVowels("sensitivity")); // snstvty
console.log(removeVowels("cellar door")); // cllr dr
```

### spam

Create a `spam.js` file and solve the function below:

```js
// Write a function `spam` that accepts a 2D array as an argument. The array contains pairs as elements.
// The first element of every pair is a number and the second element is a word. The function should
// return a string containing the words repeated the specified number of times. See the examples.

let array1 = [
  ["hi", 3],
  ["bye", 2],
];
console.log(spam(array1)); // 'hi hi hi bye bye'

let array2 = [
  ["cat", 1],
  ["dog", 2],
  ["bird", 4],
];
console.log(spam(array2)); // 'cat dog dog bird bird bird bird'
```

### removeFirstVowel

Create a `remove-first-vowel.js` file and solve the function below:

```js
// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'
```

### shortenLongWords

Create a `shorten-long-words.js` file and solve the function below:

```js
// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her'
```

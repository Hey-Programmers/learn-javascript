# What's your function?

_Functions_ are constructs that allow programmers to group multiple statements together into a
single logical unit. Functions may take _arguments_ as input and return some value as output.

Before you start this exercise, make sure you have watched the lecture first.

+ [Lecture](https://youtu.be/g7fBqWTdeMw)

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

This is where we bring well defined structure to our code. If so far we've only learned the isolated
"words", "phrases", and "sentences" of programming, we now turn our attention to the "paragraphs".

+ [Walkthrough Part 1](https://youtu.be/hS-p8ICd7Ek)
+ [Walkthrough Part 2](https://youtu.be/pE9JYGobDQg)

-AZ

## 0. Practice how to read.

Before you write functions on your own, let's warm up by interpretting a few.

Create a new folder named `A_functions_exercise`. Predict what would print when executing each of
the snippets below. Test your prediction by typing the snippet into their own files and executing
the program. Don't copy and paste.

Write the below code into a file named `snippet-0-1.js`. Make a prediction for what it will print.
Run it.

```js
// snippet 0-1
let greet = function () {
  console.log("hey");
  console.log("programmers");
};

let whistle = function () {
  console.log("doot");
};

console.log("first");
console.log("second");
greet();
console.log("third");
console.log("fourth");
whistle();
```

Write the below code into a file named `snippet-0-2.js`. Make a prediction for what it will print.
Run it.

```js
// snippet 0-2
let howMany = function () {
  return 42;
};

console.log(howMany);
console.log(howMany());

const theAnswer = howMany();
console.log(theAnswer);

let howMuch = function () {
  5;
};
console.log(howMuch());
```

Write the below code into a file named `snippet-0-3.js`. Make a prediction for what it will print.
Run it.

```js
// snippet 0-3
let average = function (num1, num2) {
  console.log("calculating...");
  return (num1 + num2) / 2;
};

console.log(average(5, 10));
console.log(average(20, 26));
console.log(average(50, 100) + 2);

let a = 21 + 3;
let b = 20;
let n = average(a, b);
console.log(average(n, 18));
```

Write the below code into a file named `snippet-0-4.js`. Make a prediction for what it will print.
Run it.

```js
// snippet 0-4
let exclaim = function (str) {
  let capitalized = str.toUpperCase();
  return capitalized + "!!";
};

let result = exclaim("potato");
console.log(result);
console.log(result.length);
console.log(result[0]);
console.log(result[result.length - 1]);
```

## 1. Practice how to write.

In this section of the exercise you'll be prompted to write a function to accomplish a specific
task. Read the description and look at the example output to figure out what should be implemented
within the function. Write each function to a separate file in the `A_functions_exercise` folder and
test your work by running the file.

### isDivBy4

Create an `is-div-by-4.js` file and solve the function below:

```js
// Write a function `isDivBy4` that accepts a number as an argument. The function should return a
// boolean indicating whether or not the number is divisible by 4.

console.log(isDivBy4(8)); // true
console.log(isDivBy4(12)); // true
console.log(isDivBy4(24)); // true
console.log(isDivBy4(9)); // false
console.log(isDivBy4(10)); // false
```

### keepItQuiet

Create a `keep-it-quiet.js` file and solve the function below:

```js
// Write a function `keepItQuiet` that accepts a string as an argument. The function should return the
// lowercase version of the string with 3 periods added to the end of it.

console.log(keepItQuiet("HOORAY")); // 'hooray...'
console.log(keepItQuiet("Doggo")); // 'doggo...'
console.log(keepItQuiet("WHAT?!?!")); // 'what?!?!...'
```

### isLong

Create an `is-long.js` file and solve the function below:


```js
// Write a function `isLong` that accepts a string as an argument. The function should return a boolean
// indicating whether or not the string is longer than 5 characters

console.log(isLong("pie")); // false
console.log(isLong("kite")); // false
console.log(isLong("kitty")); // false
console.log(isLong("telescope")); // true
console.log(isLong("thermometer")); // true
console.log(isLong("restaurant")); // true
```

### half

Create a `half.js` file and solve the function below:


```js
// Write a function `half` that accepts a number as an argument. The function should return half of the
// number.

console.log(half(8)); // 4
console.log(half(15)); // 7.5
console.log(half(90)); // 45
```

### endsWithT

Create an `endsWithT.js` file and solve the function below:

```js
// Write a function `endsWithT` that accepts a string as an argument. The function should return a
// boolean indicating whether or not the string ends with the character 't'.

console.log(endsWithT("smart")); // true
console.log(endsWithT("racket")); // true
console.log(endsWithT("taco")); // false
console.log(endsWithT("boomerang")); // false
```

### average

Create an `average.js` file and solve the function below:


```js
// Write a function `average` that accepts three numbers as arguments. The function should return the
// average of the three numbers.

console.log(average(3, 10, 8)); // 7
console.log(average(10, 5, 12)); // 9
console.log(average(6, 20, 40)); // 22
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips. Watch it
in 1.5x speed if you like.

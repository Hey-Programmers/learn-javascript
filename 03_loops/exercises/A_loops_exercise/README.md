# In For a Loop

_Loops_ are a construct that programmers use control the repeated execution of code.

Before you start this exercise, make sure you have watched the lecture first.

+ [Lecture](https://youtu.be/gs4WlW-ZQfg)

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

+ [Walkthrough Part 1](https://youtu.be/D_Vh-Opw-_I)
+ [Walkthrough Part 2](https://youtu.be/rlolQAocQyA)

I think loops are great because we can type a small amount of code, but instruct the computer to
perform a lot of "work". The programmer is lazy and computer doesn't complain. What a perfect pair.

-AZ

## 0. Read. Run. Repeat.

Can you anticipate what these loop snippets will print out?

Create a new folder named `A_loops_exercise`. Predict what would print when executing each of the
snippets below. Test your prediction by typing the snippet into their own files and executing the
program. Don't copy and paste.

Write the below code into a file named `snippet-1.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 1
console.log("hello");

for (let i = 0; i < 5; i++) {
  console.log("code");
}

console.log("goodbye");
```

Write the below code into a file named `snippet-2.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 2
console.log("hi");

for (let i = 3; i <= 7; i++) {
  console.log("program");
  console.log(i);
}

console.log("bye");
```

Write the below code into a file named `snippet-3.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 3
let foo = function () {
  for (let num = 10; num > 0; num -= 2) {
    console.log(num);
  }
};

console.log("begin");
foo();
console.log("end");
foo();
```

Write the below code into a file named `snippet-4.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 4
let word = "street";
for (let i = 0; i < word.length; i++) {
  console.log(i);
  console.log(word[i]);
}
```

Write the below code into a file named `snippet-5.js`. Make a prediction for what it will print. Run
it.

```js
// snippet 5
let total = 0;
for (let i = 1; i < 5; i++) {
  total += i;
  console.log(total);
}

console.log("grand total: " + total);
```

## 1. Stay in the Loop.

In this section of the exercise you'll be prompted to write a function to accomplish a specific
task. Read the description and look at the example output to figure out what should be implemented
within the function. Write each function to a separate file in the `A_loops_exercise` folder and
test your work by running the file.

### oneToFour

Create a `one-to-four.js` file and solve the function below:

```js
// Write a function `oneToFour` that prints all whole numbers from one to four, inclusive. The function
// takes in no arguments and doesn't need to return any value. It should just print to the terminal.

oneToFour();
// prints
//  1
//  2
//  3
//  4
```

### countUp

Create a `count-up.js` file and solve the function below:

```js
// Write a function `countUp(max)` that accepts a max number as an argument. The function should print
// all numbers from 1 up to and including the max. The function doesn't need to return any value. It
// should just print to the terminal.

countUp(5);
// prints
//  1
//  2
//  3
//  4
//  5

countUp(3);
// prints
//  1
//  2
//  3
```

### minToMax

Create a `min-to-max.js` file and solve the function below:

```js
// Write a function `minToMax(min, max)` that accepts two numbers as arguments. The function should
// print all numbers from min to max inclusive. The function doesn't need to return any value. It
// should just print to the terminal.

minToMax(5, 9);
// prints
//  5
//  6
//  7
//  8
//  9

minToMax(11, 13);
// prints
//  11
//  12
//  13

minToMax(20, 11);
```

### stringIterate

Create a `string-iterate.js` file and solve the function below:

```js
// Write a function `stringIterate` that accepts a string as an argument. The function should print out
// each character of the string, one by one. The function doesn't need to return any value. It should
// just print to the terminal.

stringIterate("celery");
// prints
//  c
//  e
//  l
//  e
//  r
//  y

stringIterate("hat");
// prints
//  h
//  a
//  t
```

### evens

Create an `evens.js` file and solve the function below:

```js
// Write a function `evens(max)` that accepts a max number as an argument. The function should print
// all positive even numbers that are less than the max.

evens(11);
// prints
//  2
//  4
//  6
//  8
//  10

evens(8);
// prints
//  2
//  4
//  6
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

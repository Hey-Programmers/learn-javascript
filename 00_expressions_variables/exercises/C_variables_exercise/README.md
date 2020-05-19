# Very Able

_Variables_ allow programmers to store values to be used later in their code. The value that a
variable contains can change throughout the runtime of a program.

Before you start this exercise, make sure you have watched the lecture first.

+ [Lecture](https://youtu.be/lmXRLpoyPic)

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

+ [Walkthrough](https://youtu.be/T_xE-x0Eyqk)

Ready?

-AZ

## 0. Do you speak the language?

Create a folder named `variables_exercise`. Create a file named `zero.js` inside of it. Predict what
the `console.log`s in the code below will print out:

```js
let location = "Brooklyn, " + "NY";
console.log(location);

let quantity = 4 * 5 + 1;
console.log(quantity);
```

Test your predictions by typing the code into the `zero.js` file; don't copy and paste. Run it to
check your guess.

## 1. What's changed? What hasn't?

Create a new file named `one.js` inside of the `variables_exercise` folder. Predict what the
`console.log`s in the code below will print out:

```js
let word = "bye";
console.log(word + " felicia");
console.log(word);

let num = 10;
num = num * 2;
console.log(num);

let bottlesOfBeer = 99;
let around = bottlesOfBeer - 1;
console.log(around);
console.log(bottlesOfBeer);
```

Test your predictions by typing the code into the `one.js` file. Run it.

## 2. How about this?

Create a new file named `two.js` inside of the `variables_exercise` folder. Predict what the
`console.log`s in the code below will print out:

```js
let apple;
console.log(apple);

apple = 5;
console.log(apple);

apple + 1;
console.log(apple);

apple += 1;
console.log(apple);

let banana = apple;
console.log(banana);

banana = banana / 2;
console.log(banana);

console.log(apple);
```

Test your predictions by typing the code into the `two.js` file. Run it.

## 3. Did you forget about modulo?

Create a new file named `three.js` inside of the `variables_exercise` folder. Predict what the
`console.log`s in the code below will print out:

```js
let qty = 15 % 4;
console.log(qty);

let num = 38 + 3;
num++;
console.log(num + " is a great number");

let isNumEven = num % 2 === 0;
console.log(num + " is even? " + isNumEven);

let isQtyEven = qty % 2 === 0;
console.log(qty + " is even? " + isQtyEven);
```

## 4. So you can code, but do you have good taste in cinema?

Create a new file named `four.js` inside of the `variables_exercise` folder. Create two variables:

- `movie`, assigned to the string title of your favorite movie
- `views`, assigned to the number of times you watched that movie

When executed, the program should print the message
`I watched <movie> about <views> number of times`.

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

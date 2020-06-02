# Express Yourself

_Expressions_ are the building blocks of programs. We can combine _values_ with _operators_ to
compose an expression. An _expression_ evaluates to some _value_.

Before you start this exercise, make sure you have watched the lecture first.

+ [Lecture Part 1](https://youtu.be/NORcxNPVtg4)
+ [Lecture Part 2](https://youtu.be/1y9DCzWYons)

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

+ [Walkthrough](https://youtu.be/oMHa_c21sCw)

The fundamentals of any skill aren't particularly glamorous. We'll learn the "cool" stuff when you
are ready. Crawl. Walk. Run.

-AZ

## 0. Hope you didn't forget.

Create a new folder named `expressions-exercise`. Open it in VSCode. Create four files within this
folder: `string-expressions.js`, `number-expressions.js`, `boolean-expressions.js`,
`comparisons.js`.

After creating these files, your folder structure should look like this:

```plaintext
expressions-exercise/
├── string-expressions.js
├── number-expressions.js
├── boolean-expressions.js
└── comparisons.js
```

## 1. Stringing together some expressions.

Make a mental prediction of what the following expressions will print:

```javascript
console.log("river" + "town");
console.log("cat" + "dog");
console.log("New" + " York");
console.log("runner's knee" + "!");
console.log("man" + "bear" + "pig");
```

To check your prediction, write the code into `string-expressions.js` and run it in your terminal
with `node string-expressions.js`. Don't copy and paste. Type everything manually. You should do
this line by line. This means you should type the first expression, run it. Add the second
expression, run it, and so on. Don't try to type all five lines and then run it all at once. You
will find it hard to pinpoint any typos if you do that.

## 2. Don't enjoy math? Too bad.

Make predictions for what these number expressions evaluate to. Test your predictions by writing the
code to `number-expressions.js` and running it:

```js
console.log(2 + 3);
console.log(10 - 15);
console.log(4 + 1 - 5);
console.log(4 * 3);

console.log(7 / 2);
console.log(4 + 2 * 3);
console.log((4 + 2) * 3);
console.log(5 % 2);

console.log(6 % 2);
console.log(7 % 2);
console.log(8 % 2);
console.log(19 % 8);

console.log(24 % 8);
console.log(7 % 4);
console.log(4 % 7);
console.log(5 + (10 % 5));
console.log((5 + 10) % 5);
```

## 3. Shoutout to George Boole.

Make predictions for what these boolean expressions evaluate to. Test your predictions by writing
the code to `boolean-expressions.js` and running it:

```js
console.log(false);
console.log(!true);
console.log(!false);
console.log(!!true);

console.log(false && false);
console.log(false && true);
console.log(true && false);
console.log(true && true);

console.log(false || false);
console.log(false || true);
console.log(true || false);
console.log(true || true);

console.log(!false || false);
console.log(false || (true && true));
console.log(false || !(true && true));
console.log(!true && (false || true));
```

## 4. Drawing a Comparison.

Make predictions for what these comparison expressions evaluate to. Test your predictions by writing
the code to `comparisons.js` and running it:

```js
console.log(true === false);
console.log(false === false);
console.log(false !== true);
console.log(!true === false);

console.log(2 + 3 === 5);
console.log(4 < 0);
console.log(10 >= 10);
console.log(10.3 >= 10);

console.log(100 / 2 === 50);
console.log(100 % 2 === 0);
console.log(11 % 2 === 0);
console.log(7.0 === 7);

console.log(13 % 5 > 0);
console.log("potato" === "potato");
console.log("Tomato" === "tomato");
console.log("42" === 42);
console.log(5 > 3 && 1 === 0);
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

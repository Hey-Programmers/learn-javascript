# Functional Fitness

_Functions_ group together statements deliberately with a purpose in mind. They should do one thing
and do it well.

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

+ [Walkthrough](https://youtu.be/YQjR-TSWE-U)

Programmers write functions. You are a programmer. You write functions.

-AZ

## Instructions

Create a new folder named `B_functions_exercise`, this is where you'll save all of your files. Solve
each of the prompts below. Create a new file for each prompt and execute your code to see if it
matches the example output.

### startsWithR

Create a `starts-with-r.js` file and solve the function below:

```js
// Write a function `startsWithR` that accepts a string as an argument and returns a boolean indicating
// whether or not the string starts with 'r' or 'R'.

console.log(startsWithR("roger that")); // true
console.log(startsWithR("Row, row, row your boat")); // true
console.log(startsWithR("slip")); // false
console.log(startsWithR("Taxicab")); // false
```

### parity

Create a `parity.js` file and solve the function below:

```js
// Write a function `parity` that accepts a number as an argument. The function should return the
// string 'even' if the number is even. It should return the string 'odd' if the number is odd.

console.log(parity(5)); // 'odd'
console.log(parity(7)); // 'odd'
console.log(parity(13)); // 'odd'
console.log(parity(32)); // 'even'
console.log(parity(10)); // 'even'
console.log(parity(602348)); // 'even'
```

### longer

Create a `longer.js` file and solve the function below:

```js
// Write a function `longer` that accepts two strings as arguments. The function should return the
// string that is longer. If the strings have the same length, then return the first string.

console.log(longer("drum", "piranha")); // 'piranha'
console.log(longer("basket", "fork")); // 'basket'
console.log(longer("flannel", "sustainable")); // 'sustainable'
console.log(longer("disrupt", "ability")); // 'disrupt'
console.log(longer("bird", "shoe")); // 'bird'
```

### oneOrNone

Create a `one-or-none.js` file and solve the function below:

```js
// Write a function `oneOrNone` that accepts two booleans as arguments. The function should return true
// if exactly one of the arguments is true. If BOTH arguments are true, then it should return false.

console.log(oneOrNone(false, false)); // false
console.log(oneOrNone(true, false)); // true
console.log(oneOrNone(false, true)); // true
console.log(oneOrNone(true, true)); // false
```

### endsInLy

Create a `ends-in-ly.js` file and solve the function below:

```js
// Write a function `endsInLy` that accepts a string as an argument and returns a boolean indicating
// whether or not the string ends in the substring 'ly'.

console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidly")); // true
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true
```

### funnySound

Create a `funny-sound.js` file and solve the function below:

```js
// Write a function `funnySound` that accepts two strings as arguments. The function should return a
// new string containing the first three characters of both strings concatenated together.

// You can assume that the arguments are both at least three characters long.

console.log(funnySound("tiger", "spoon")); // 'tigspo'
console.log(funnySound("computer", "phone")); // 'compho'
console.log(funnySound("skate", "bottle")); // 'skabot'
console.log(funnySound("frog", "ashtray")); // 'froash'
```

### stringSize

Create a `string-size.js` file and solve the function below:

```js
// Write a function `stringSize` that accepts a string as an argument. The function should return the
// string 'small' if the argument is shorter than 5 characters, 'medium' if it is exactly 5 characters, and
// 'large' if it is longer than 5 characters.

console.log(stringSize("cat")); // 'small'
console.log(stringSize("bell")); // 'small'
console.log(stringSize("ready")); // 'medium'
console.log(stringSize("shirt")); // 'medium'
console.log(stringSize("shallow")); // 'large'
console.log(stringSize("intelligence")); // 'large'
```

### wackyWord

Create a `wacky-word.js` file and solve the function below:

```js
// Write a function `wackyWord` that accepts two strings as arguments. The function should return a new
// string containing the first three characters of the first string concatenated with the last two
// character of the second string.

// You can assume that the first argument has a length of at least three and the second argument has a
// length of at least two.

console.log(wackyWord("very", "kindly")); // 'verly'
console.log(wackyWord("forever", "sick")); // 'forck'
console.log(wackyWord("cellar", "door")); // 'celor'
console.log(wackyWord("bagel", "sweep")); // 'bagep'
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

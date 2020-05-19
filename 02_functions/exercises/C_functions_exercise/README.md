# Major Malfunction

More practice!

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

+ [Walkthrough](https://youtu.be/KCv1ovMB4DU)

I think the reason why coding has a reputation for being nonintuitive is because beginners don't
spend enough time on the basics. They miss a step early, but instead of filling that gap of
knowledge, they preemptively move on. They'll stumble through more advanced topics until that debt
cannot be ignored. That is why I think it's important to exercise a concept extensively. Write code.
Run it.

-AZ

## Instructions

Create a new folder named `C_functions_exercise`, this is where you'll save all of your files. Solve
each of the prompts below. Create a new file for each prompt and execute your code to see if it
matches the example output.

### divisible

Create a `divisible.js` file and solve the function below:

```js
// Write a function `divisible(num1, num2)` that accepts two numbers as arguments. The function should
// return a boolean indicating whether or not `num1` is divisible by `num2`.

console.log(divisible(12, 3)); // true
console.log(divisible(12, 5)); // false
console.log(divisible(60, 4)); // true
console.log(divisible(60, 11)); // false
console.log(divisible(21, 7)); // true
console.log(divisible(21, 6)); // false
```

### caseChanger

Create a `case-changer.js` file and solve the function below:

```js
// Write a function `caseChange` that accepts a string and a boolean as arguments. The function should
// return the uppercase version of the string if the boolean is true. The function should return the
// lowercase version of the string if the boolean is false.

console.log(caseChange("Super", true)); // 'SUPER'
console.log(caseChange("Super", false)); // 'super'
console.log(caseChange("tAmBourine", true)); // 'TAMBOURINE'
console.log(caseChange("tAmBourine", false)); // 'tambourine'
```

### inRange

Create a `in-range.js` file and solve the function below:

```js
// Write a function `inRange(min, max, n)` that accepts three numbers as arguments. The function should
// return a boolean indicating if `n` is between `min` and `max` inclusive.

console.log(inRange(5, 13, 8)); // true
console.log(inRange(5, 13, 29)); // false
console.log(inRange(100, 125, 100)); // true
console.log(inRange(100, 125, 99)); // false
console.log(inRange(40, 45, 44)); // true
console.log(inRange(40, 45, 45)); // true
console.log(inRange(40, 45, 46)); // false
```

### averageOfFour

Create an `average-of-four.js` file and solve the function below:

```js
// Write a function `averageOfFour(num1, num2, num3, num4)` that accepts four numbers as arguments. The
// function should return the average of all four numbers.

console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(-20, 50, 4, 21)); // 13.75
console.log(averageOfFour(10, 4, 12, 3)); // 7.25
console.log(averageOfFour(5, 5, 3, 7)); // 5
```

### numberChange

Create a `number-change.js` file and solve the function below:

```js
// Write a function `numberChange` that accepts a number as an argument. The function should return
// half the number if it is even. The function should return double the number if it is odd.

console.log(numberChange(6)); // 3
console.log(numberChange(7)); // 14
console.log(numberChange(16)); // 8
console.log(numberChange(21)); // 42
```

### larger

Create a `larger.js` file and solve the function below:

```js
// Write a function `larger` that accepts two numbers as arguments. The function should return the
// larger number.

console.log(larger(256, 400)); // 400
console.log(larger(31, 4)); // 31
console.log(larger(-6, 7)); // 7
console.log(larger(11.3, 11.2)); // 11.3
console.log(larger(-10, -3)); // -3
```

### contains

Create a `contains.js` file and solve the function below:

```js
// Write a function `contains(str1, str2)` that accepts two strings as arguments. The function should
// return a boolean indicating whether or not `str2` is contained within `str1`. The function should
// ignore any differences in capitalization.

console.log(contains("caterpillar", "pill")); // true
console.log(contains("lion's share", "on")); // true
console.log(contains("SORRY", "or")); // true
console.log(contains("tangent", "gem")); // false
console.log(contains("clock", "ok")); // false
```


## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

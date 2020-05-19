# Strength and Conditioning

A _conditional_ is a construct that allows programmers to execute different code dependent on the
value of a boolean expression.

Before you start this exercise, make sure you have watched the lecture first.

+ [Lecture](https://youtu.be/ous6eeG2BaY)

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

+ [Walkthrough Part 1](https://youtu.be/o50tHXYQzFE)
+ [Walkthrough Part 2](https://youtu.be/Ij7V0JfxeUs)

_If_ you want to learn how to code, _then_ code.

-AZ

## 0. If you can do this, then move on.

Create a new folder named `conditional_exercise`. Inside, create a file named `zero.js`. Predict
what each of the code snippets below will print out. After you make a prediction for a snippet, add
the snippet into `zero.js`. Don't copy and paste. Run the code to verify your prediction for that
snippet, then move on to the next snippet.

```js
// snippet 0-1
if (true) {
  console.log("foo");
}

if (false) {
  console.log("bar");
}
```

```js
// snippet 0-2
if (false || false) {
  console.log("boop");
}

if (true || false) {
  console.log("beep");
}
```

```js
// snippet 0-3
let num = 40;

if (num > 0) {
  console.log("zip");
}

if (num % 2 === 0) {
  console.log("zoop");
}
```

```js
// snippet 0-4
let word = "jeep";

if (word[0] === "d") {
  console.log("yer");
} else {
  console.log("nah");
}
```

```js
// snippet 0-5
let sentence = "roger that";

if (sentence[sentence.length - 1] === "t") {
  console.log("ends in t");
} else {
  console.log("does not end in t");
}

if (sentence.length <= 4) {
  console.log("short");
} else {
  console.log("long");
}
```

## 1. Conditions Do Apply.

Create a new file named `one.js` inside of the `conditional_exercise` folder. Predict what each of
the snippets below will print out. Type each snippet into the file and run it to test your
prediction. Don't copy and paste.

```js
// snippet 1-0
let qty = 38;

if (qty > 30 && qty % 5 === 4) {
  console.log("swish");
} else {
  console.log("swoosh");
}

if (qty > 0) {
  console.log("pos");
}
```

```js
// snippet 1-1
let a = "celery";
let b = "SQUASH";

if (a === a.toUpperCase()) {
  console.log("alpha");
}

if (b === b.toUpperCase()) {
  console.log("beta");
}
```

```js
// snippet 1-2
let number = 9;

if (number > 4) {
  console.log("ding");
} else if (number % 3 === 0) {
  console.log("dong");
}
```

```js
// snippet 1-3
let z = 12;

if (z > 10) {
  console.log("vroom");
}

if (z % 3 === 0) {
  console.log("skrrt");
}
```

## 2. Iffy.

Create a new file named `two.js` inside of the `conditional_exercise` folder. Predict what each of
the snippets below will print out. Type each snippet into the file and run it to test your
prediction. Don't copy and paste.

```js
// snippet 2-1
let nonsense = "blog trust fund tattooed williamsburg poke roof party";
let hasOk = nonsense.indexOf("ok") > -1;

if (hasOk) {
  console.log("yeet");
} else if (nonsense.length > 10) {
  console.log("yo");
} else {
  console.log("no");
}

let hasZoo = nonsense.indexOf("zoo") > -1;
let hasFun = nonsense.indexOf("fun") > -1;

if (hasZoo && hasOk) {
  console.log("cool");
} else if (hasOk) {
  console.log("rad");
} else if (hasFun) {
  console.log("dope");
} else {
  console.log("nope");
}
```

```js
// snippet 2-2

let q = 25;
if (q % 3 === 0 && q % 5 === 0) {
  console.log("both");
} else if (q % 3 === 0 || q % 5 == 0) {
  console.log("either");
} else {
  console.log("neither");
}

let r = 9;
if (r % 3 === 0 && r % 5 === 0) {
  console.log("both");
} else if (r % 3 === 0 || r % 5 == 0) {
  console.log("either");
} else {
  console.log("neither");
}

let s = 15;
if (s % 3 === 0 && s % 5 === 0) {
  console.log("both");
} else if (s % 3 === 0 || s % 5 == 0) {
  console.log("either");
} else {
  console.log("neither");
}
```

## 3. Conditional Love.

Create a new file named `three.js` inside of the `conditional_exercise` folder. The program should
print out `FOUND` if the substring `coDe` exists in the text below. If the `coDe` does not exist in
the text, then the program should print `NOT FOUND`.

```plaintext
AIICXAIBAAKBgQCuw0YyucjI9bf7yRhIkyg4Ru6kYU7O6fIn2JoFDzCZNkzDdsuXFGh6BXNvbu8uZUT289ERzYP1QjryMEKWzcbtsioyQApL7AgOZyFc3JJ7wvupHhIj2sqxJNtpAh7HQFG08rYh2Pb3HwOm83rbTomM6LnnjooGcoDeuWkuPqXsRlwIDAQABAoGAeQkbPBR5n9y2QLaEjcDGv7dVpFiMGHMaZZVDX34rZPy1EkZNZqlQU0jopLVvLyLESMh9A7gKhqoyMAbgZPpdb0CvniTJPpKYk24mLBeym8rBMW3XBmKk1xIOcJPGXMxeJW61jxPg6doah0aCIjf8n0Z8t8B81kLFojpECQQDzlCp0Nzka3AVZVPdBuuPg0fzeV8ugpiPEp6wQLjIMDFqYtGoAOEy4JpkmkK7zwsQsHZ8jbOtqIFdRLPrvAkEAruU321Ie1CnYCHX4Q79vLcDeWOUpdzEHp2uzDIfzP1gv7RIktGgSZWKhrnNWdeH4Y0CFb9lu6TQYJwNJvug2QJBANX0m3Uds9P9pLbQlI9WWmAtYqIZrsBElcAjOgAik0uOfawholNiw5B3ADvIYqPkLW4dGk1dO6zxW8ZF83MdMCQHGfhxLuFgsOBSfF7Bj4UX6T9FGhUGSXiqUsd06E2mMRLAjWUUUw82DLwucxMrSsV4z1aN57asC8YuQ9FkCQGirlVCt4ccXeGLCHcCsI8AYQJFRzbMs381M16jEpnaKUGrtdbMW018gWJ0EoD4tS2YZpr1hEbtiOkPJaaTKQ
```

You may copy and paste. What a time to be alive.

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

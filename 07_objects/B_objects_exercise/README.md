# Object Obsession

More practice on JavaScript objects!

Before you start this exercise, make sure you have watched the lecture first.

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

Keep practicing. Hopefully you are practicing everyday. Consistency beats intensity given a long
enough timeline. If want to become proficient quickly, then practice intensely and consistently.

-AZ

## Instructions

Create a new folder named `B_objects_exercise`, this is where you'll save all of your files. Solve
each of the prompts below. Create a new file for each prompt and execute your code to see if it
matches the example output.

### characterCount

Create a `character-count.js` file and solve the function below:

```js
// Write a function `characterCount` that accepts a string as an argument. The function should return
// an object containing the count of characters in the string.

console.log(characterCount("evening")); // { e: 2, v: 1, n: 2, i: 1 , g: 1 }
console.log(characterCount("mississippi")); // { m: 1, i: 4, s: 4, p: 2 }
console.log(characterCount("chili")); // { c: 1, h: 1, i: 2, l: 1 }
```

### letterMap

Create a `letter-map.js` file and solve the function below:

```js
// Write a function `letterMap` that accepts a string and an object as arguments. The function should
// return a version of the string where characters that appear as keys in object are replaced with
// their corresponding values.

console.log(letterMap("symbolic", { y: "i", o: "a", c: "k" })); // 'simbalik'
console.log(letterMap("colossal", { o: "x", s: "p" })); // 'cxlxppal'
console.log(letterMap("miniscule", { u: "t", i: "f", e: "q" })); // 'mfnfsctlq'
```

### mostCommonLetter

Create a `most-common-letter.js` file and solve the function below:

```js
// Write a function `mostCommonLetter` that accepts a string as an argument. The function should return
// the character that appears most frequently in the string. You can assume that there are no ties.

console.log(mostCommonLetter("building")); // 'i'
console.log(mostCommonLetter("shoestring")); // 's'
console.log(mostCommonLetter("preparedness")); // 'e'
```

### wordReplace

Create a `word-replace.js` file and solve the function below:

```js
// Write a function `wordReplace` that accepts a sentence string and an object as arguments. The
// function should return a new sentence where words that are keys of the object are replaced with
// their corresponding values.

console.log(wordReplace("I never take naps during the day", { never: "always", day: "weekend" }));
// 'I always take naps during the weekend'

console.log(wordReplace("the park is closed", { closed: "open", the: "a" }));
// 'a park is open'

console.log(wordReplace("I do what I want", { I: "we", cat: "dog" }));
// 'we do what we want'
```

### getAverageAge

Create a `get-average-age.js` file and solve the function below:

```js
// Write a function `getAverageAge` function that accepts an array of objects representing people.
// The function should return the average age of the people.

let peeps = [
  { name: "Lovelace", age: 36, born: "London, UK" },
  { name: "Kleene", age: 85, born: "Connecticut, US" },
  { name: "Turing", age: 41, born: "London, UK" },
  { name: "Hopper", age: 85, born: "New York, US" },
];
console.log(getAverageAge(peeps)); // 61.75

let people = [
  { name: "Orwell", age: 46, born: "Bihar, India" },
  { name: "Bradbury", age: 91, born: "California, US" },
  { name: "Huxley", age: 69, born: "California, US" },
];
console.log(getAverageAge(people)); // 86.66
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

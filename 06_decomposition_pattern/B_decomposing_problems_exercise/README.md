# Predisposed to Decompose

More practice on decomposing!

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

Write code. Run it.

-AZ

## Instructions

Create a new folder named `B_decomposing_problems_exercise`, this is where you'll save all of your
files. Solve each of the prompts below. Create a new file for each prompt and execute your code to
see if it matches the example output.

Some (but not all) of the problems below should be decomposed with a helper function.

### removeLastVowel

Create a `remove-last-vowel.js` file and solve the function below:

```js
// Write a function `removeLastVowel` that accepts a string as argument. The function should return
// the string with its last vowel removed. Vowels are the letters a, e, i, o, u

console.log(removeLastVowel("speaker")); // 'speakr'
console.log(removeLastVowel("trading")); // 'tradng'
console.log(removeLastVowel("thunder")); // 'thundr'
console.log(removeLastVowel("myth")); // 'myth'
```

### pickPrefix

Create a `pick-prefix.js` file and solve the function below:

```js
// Write a function `pickPrefix(strings, prefix)` that accepts an array of strings and a prefix string 
// as an argument. The function should return the an array of words that begin with the prefix.

console.log(pickPrefix(['connect', 'company', 'concert', 'cram'], 'con'));
// ['connect', 'concert']

console.log(pickPrefix(['miner', 'mistake', 'misspeak', 'moose', 'mission'], 'mis'));
// [''mistake', 'misspeak', 'mission']
```

### trendyText

Create a `trendy-text.js` file and solve the function below:

```js
// Write a function `trendyText` that accepts a sentence string as an argument. The function should
// return the sentence where the last vowel of every word is removed.

console.log(trendyText("the concert will be epic")); // 'th concrt wll be epc'
console.log(trendyText("breakfast food is wonderful")); // 'breakfst fod s wonderfl'
console.log(trendyText("the weather will improve hopefully")); // 'th weathr wll improv hopeflly'
```

### mostLetterWord

Create a `most-letter-word` file and solve the function below:

```js
// Write a function `mostLetterWord` that accepts a sentence string and a character as arguments.
// The function should return the word of the sentence that contains the character the most number
// of times. You can assume that the sentence contains at least one word. If there is a tie, return
// the word that appears earlier in the sentence.

console.log(mostLetterWord('she received an award for excellence in science', 'e')); // 'excellence'
console.log(mostLetterWord('she received an award for excellence in science', 'a')); // 'award'
console.log(mostLetterWord('I hope sophomore year comes soon', 'o')); // 'sophomore'
console.log(mostLetterWord('I hope sophomore year comes soon', 's')); // 'sophomore'
```

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

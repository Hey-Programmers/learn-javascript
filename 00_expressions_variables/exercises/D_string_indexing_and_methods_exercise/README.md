# Intelligent Indexing

A string consists of one or more characters. An _index_ is a number that corresponds to the position
of a character in a string. The first character of a string has _index 0_, the second character has
_index 1_, and so on. _Indexing_ is a pattern that programmers use often in strings. This pattern
will also appear later in more advanced applications.

Before you start this exercise, make sure you have watched the lecture first.

+ [Lecture](https://youtu.be/QoeKfd9MYWA)

If you get stuck during this exercise, reference this walkthrough. Only watch enough of the
walkthrough to get yourself unstuck, then pause the video and pick up the exercise on your own.

+ [Walkthrough Part 1](https://youtu.be/lXlNybyHclc)
+ [Walkthrough Part 2](https://youtu.be/4sf1uP9OIDI)

This is where we begin to unlock the basic programming patterns that you'll always be able to rely
on. Study them closely.

-AZ

## 0. Small String Snippets.

Create a new folder named `string-indexing-and-methods`. Create a file named
`small-string-snippets.js` inside. Predict what the following code will print out:

```js
console.log("promenade"[3]);
console.log("tiger"[1]);
console.log("wheel".length);
console.log("wheel".length - 1);
console.log("noMAD".toUpperCase());
console.log("hey programmers"[2] === "y");

console.log("volleyball".length > 20);
console.log("treasure".indexOf("r"));
console.log("treasure".indexOf("e"));
console.log("web"[5]);
console.log("red".indexOf("x"));
console.log("red".indexOf("R"));
```

Verify your predictions by writing the code to the `small-string-snippets.js` file. Don't copy and
paste; type everything out manually. Run the code.

## 1. Proper Patterns.

Inside of the `string-indexing-and-methods` folder create another file named `proper-patterns.js`.
Predict what the following code will print out:

```js
let word = "suspension bridge";
console.log(word[4]);
console.log(word.length > 5 && word[0] === "d");
console.log(word.length > 5 && word[0] === "s");
console.log(word.indexOf("o") > -1);
console.log(word.indexOf("z") > -1);

let str = "foggy";
console.log(str[2 + 1]);
console.log(str[str.length - 1]);
str = " day";
console.log(str);
console.log(str.length);
console.log(str.indexOf("ogg"));
```

Type the code. Don't copy and paste. Run it. Check your predictions.

## 2. Dare to Decipher?

Inside of the `string-indexing-and-methods` folder create another file named `dare-to-decipher.js`.
Predict what the following code will print out:

```js
let phrase = "that's all folks";
console.log(phrase[phrase.length]);
console.log(phrase[phrase.length - 1]);
console.log(phrase[phrase.length - 2]);

const i = 9;
const char = phrase[i];
console.log(char);
console.log(phrase.indexOf(char));
console.log(phrase.slice(2, 8));

console.log("abcdefg".slice(1, 3));
console.log("abcdefg".slice(2));
console.log("abcdefg".slice(4));
console.log("abcdefg".slice(2, -1));
console.log("abcdefg".slice(2, -2));
```

Nice code. Run it.

## 3. A Tedious Task

Inside of the `string-indexing-and-methods` folder create another file named `a-tedious-task.js`.
Write the program so that it prints out the index where the substring `HEY` can be found in the text
below.

```plaintext
MIICWwIBAAKBgGEdLjFEFbegPZ2AwJWkalksXr7PzWL7wIc7pOFZxXwYPWtQxvANyceCwpkqbPLsfEx7nqxAris2hYOdeN1OTFqvTyNmVuzbUPcXShn6ZoDCB30voHkeu4F3cUw5RQEUDdLscSnv4HMxHam5qgl6vXoumVNHbjyKA5UtAnfjAgMBAAECgYAmjEyvpZTxRJvwjxDi1VaZevFI0Hd4WPH9PAGgqdnH84vGXnAGFj1WikqKYcqKMQW2kdjAsWwH9D9FfrkIcDDHdZ9XuGSGkFzWtOwajWMQl7qNV1hZ288gdpIQQMOTLDgauZY6pw1cV7h4v316qJB8knQGoBNpJCfTYQJBAKV1ctsJq0Zg4QumD2hyODepP3LfLeaQsERLqVAWeuOuTY5mK5gIwsSqvcSVfY7Ze1FWIsApNFRv67azKcJPwsCQQCNlyApZFJEVNY70Er7Uu5NL9t4CYJJC9uVVkoEHEY6d7sVslqa0vP2q0zXx9YedbMBvQjxXIbY0waXUy63FvoBGJAkB3OTJWUjVgzDY1Br5wu2Yu59NjKVKLWzCsu1gaCNBfhVDX7SyIyC9EYKRfUAoQxwsmPWPyQ9QVG4WKcPZJAkBRheAotPCBE2RLHHfvpiStnMhX0UXdVyaJp5tcZ6wYV61ohyBvCOkYhUxBJzeIGrVZcvLZSLeUzXoqRPpxQxAkEAkdCZXF0gHahpZgF5y0wWcqf9ECRT1E4Hv8bk3Mf0Exp2aW34JeI6I7Xqd1NV4I9H7prQ8m3y39lFwWO8PmQ
```

Fine. You can copy and paste, _this_ time.

## Walkthrough

Watch the walkthrough in it's entirety so you don't miss out on any knowledge. Still watch the full
walkthrough even if you were able to complete this exercise easily, so you don't miss any tips.
Watch it in 1.5x speed if you like.

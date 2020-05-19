let word = "suspension bridge";
console.log(word[4]); // e
console.log(word.length > 5 && word[0] === "d"); // false
console.log(word.length > 5 && word[0] === "s"); // true
console.log(word.indexOf("o") > -1); // true
console.log(word.indexOf("z") > -1); // false

let str = "foggy";
console.log(str[2 + 1]); // g
console.log(str[str.length - 1]); // y
str = " day";
console.log(str); // ' day'
console.log(str.length); // 4
console.log(str.indexOf("ogg")); // -1
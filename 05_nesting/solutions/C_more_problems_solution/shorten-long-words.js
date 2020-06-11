// Write a function `shortenLongWords` that accepts a sentence string as an argument. The function
// should return the same sentence where words longer than 4 characters have their vowels removed.

let removeVowels = function (str) {
  let newStr = '';
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!vowels.includes(char)) {
      newStr += char;
    }
  }

  return newStr;
};

let shortenLongWords = function (sentence) {
  let words = sentence.split(' ');
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 4) {
      let noVowels = removeVowels(word);
      newWords.push(noVowels);
    } else {
      // leave it the same
      newWords.push(word);
    }
  }

  return newWords.join(' ');
};

console.log(shortenLongWords("they are very noble people")); // 'they are very nbl ppl'
console.log(shortenLongWords("stick with it")); // 'stck with it'
console.log(shortenLongWords("ballerina, you must have seen her")); // 'bllrna, you must have seen her
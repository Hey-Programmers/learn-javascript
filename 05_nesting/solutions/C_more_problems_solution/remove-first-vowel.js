// Write a function `removeFirstVowel` that accepts a string as an argument. The function should return
// the string with it's first vowel removed.

let removeFirstVowel = function (str) {
  let vowels = 'aeiou';

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (vowels.includes(char)) {
      return str.slice(0, i) + str.slice(i + 1);
    }
  }

  return str;
};

console.log(removeFirstVowel("volcano")); // 'vlcano'
console.log(removeFirstVowel("celery")); // 'clery'
console.log(removeFirstVowel("juice")); // 'jice'
console.log(removeFirstVowel("bridge")); // 'brdge'
console.log(removeFirstVowel("try")); // 'try'

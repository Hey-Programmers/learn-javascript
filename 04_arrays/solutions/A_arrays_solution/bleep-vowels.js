// Write a function `bleepVowels` that accepts a string as an argument. The function should return
// a new string where all vowels are replaced with `*`s. Vowels are the letters a, e, i, o, u.

let bleepVowels = function (str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let bleeped = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (vowels.indexOf(char) > -1) {
      bleeped += "*";
    } else {
      bleeped += char;
    }
  }

  return bleeped;
};

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'

// Write a function `longer` that accepts two strings as arguments. The function should return the
// string that is longer. If the strings have the same length, then return the first string.

let longer = function (str1, str2) {
  if (str1.length >= str2.length) {
    return str1;
  } else {
    return str2;
  }
};

console.log(longer("drum", "piranha")); // 'piranha'
console.log(longer("basket", "fork")); // 'basket'
console.log(longer("flannel", "sustainable")); // 'sustainable'
console.log(longer("disrupt", "ability")); // 'disrupt'
console.log(longer("bird", "shoe")); // 'bird'
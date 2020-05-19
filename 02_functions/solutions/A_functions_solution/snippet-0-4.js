// snippet 0-4
let exclaim = function (str) {
  let capitalized = str.toUpperCase();
  return capitalized + "!!";
};

let result = exclaim("potato");
console.log(result);
console.log(result.length);
console.log(result[0]);
console.log(result[result.length - 1]);


// POTATO!!
// 8
// P
// !
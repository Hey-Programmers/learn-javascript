// Write a function `parity` that accepts a number as an argument. The function should return the
// string 'even' if the number is even. It should return the string 'odd' if the number is odd.

let parity = function (num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
};

console.log(parity(5)); // 'odd'
console.log(parity(7)); // 'odd'
console.log(parity(13)); // 'odd'
console.log(parity(32)); // 'even'
console.log(parity(10)); // 'even'
console.log(parity(602348)); // 'even'
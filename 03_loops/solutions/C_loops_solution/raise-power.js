// Write a function `raisePower(base, exponent)` that accepts two numbers, `base` and `exponent`. The
// function should return `base` raised to the `exponent` power.
//
// For example, raisePower(2, 5) should return 32 because 2 * 2 * 2 * 2 * 2 = 32 
// For example, raisePower(4, 3) should return 64 because 4 * 4 * 4 = 64

let raisePower = function (base, exponent) {
  let product = 1;

  for (let i = 1; i <= exponent; i++) {
    product *= base;
  }

  return product;
};

console.log(raisePower(2, 5)); // 32
console.log(raisePower(4, 3)); // 64
console.log(raisePower(10, 4)); // 10000
console.log(raisePower(7, 2)); // 49
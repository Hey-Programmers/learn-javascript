// Write a function named `productUpTo(max)` that accepts a max number as an argument. The function
// should return the total product of all whole numbers from 1 to the max, inclusive. A product is a
// number obtained from multiplying numbers together.
//
// For example, productUpTo(4) should return 24 because 1 * 2 * 3 * 4 = 24

let productUpTo = function (max) {
  let product = 1;

  for (let i = 1; i <= max; i++) {
    product *= i;
  }

  return product;
};

console.log(productUpTo(4)); // 24
console.log(productUpTo(5)); // 120
console.log(productUpTo(7)); // 5040
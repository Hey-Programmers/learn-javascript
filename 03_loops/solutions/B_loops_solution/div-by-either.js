// Write a function named `divByEither(num1, num2, max)` that accepts three numbers as arguments. 
// The function should print out all positive numbers less than max that are divisible by num1 or num2. 
// The function doesn't need to return any value. It should just print to the terminal.

let divByEither = function (num1, num2, max) {
  for (let i = 1; i < max; i++) {
    if (i % num1 === 0 || i % num2 === 0) {
      console.log(i);
    }
  }
};

divByEither(4, 3, 16);
// prints
//  3
//  4
//  6
//  8
//  9
//  12
//  15

divByEither(7, 5, 20);
// prints
//  5
//  7
//  10
//  14
//  15
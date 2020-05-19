// Write a function named `fiveMultiplesOf` that accepts a number as an argument. The function should
// print out the first five multiples of the given number. The function doesn't need to return any
// value. It should just print to the terminal.

let fiveMultiplesOf = function (num) {
  for (let i = 1; i <= 5; i++) {
    console.log(i * num);
  }
};

fiveMultiplesOf(7);
// prints
//  7
//  14
//  21
//  28
//  35

fiveMultiplesOf(3);
// prints
//  3
//  6
//  9
//  12
//  15
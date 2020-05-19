// Write a function `divisibleRange(min, max, num)` that accepts three numbers as arguments. The
// function should print all numbers between `min` and `max` (exclusive) that are also divisible by
// num.

let divisibleRange = function (min, max, num) {
  for (let i = min + 1; i < max; i++) {
    if (i % num === 0) {
      console.log(i);
    }
  }
};

divisibleRange(17, 40, 9);
// prints
//  18
//  27
//  36

divisibleRange(10, 24, 4);
// prints
//  12
//  16
//  20
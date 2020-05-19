// Write a function `fizzBuzz` that accepts a max number as an argument. The function should
// print all numbers less than or equal to max that are divisible by either 3 or 5 but not both 3
// and 5. The function doesn't need to return any value. It should just print to the terminal.

let fizzBuzz = function (max) {
  for (let i = 1; i <= max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      console.log(i);
    }
  }
};

fizzBuzz(18);
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18

fizzBuzz(33);
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18
//  20
//  21
//  24
//  25
//  27
//  33
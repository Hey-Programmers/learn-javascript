// Write a function `numOdds` that accepts an array of numbers as an argument. The function should
// return a number representing the count of odd elements in the array.

let numOdds = function (numbers) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1) {
      count += 1;
    }
  }

  return count;
};

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0
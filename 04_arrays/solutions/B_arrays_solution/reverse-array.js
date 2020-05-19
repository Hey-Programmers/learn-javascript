// Write a function `reverseArray` that accepts an array as an argument. The function should return a
// array containing the elements of the original array in reverse order.

let reverseArray1 = function (array) {
  let reversed = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }

  return reversed;
};

console.log(reverseArray1(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray1([7, 1, 8])); // [8, 1, 7]


let reverseArray2 = function (array) {
  let reversed = [];

  for (let i = 0; i < array.length; i++) {
    reversed.unshift(array[i]);
  }

  return reversed;
};

console.log(reverseArray2(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray2([7, 1, 8])); // [8, 1, 7]
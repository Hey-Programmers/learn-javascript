// snippet 0-2
let howMany = function () {
  return 42;
};

console.log(howMany);
console.log(howMany());

const theAnswer = howMany();
console.log(theAnswer);

let howMuch = function () {
  5;
};
console.log(howMuch());


// [Function: howMany]
// 42
// 42
// undefined
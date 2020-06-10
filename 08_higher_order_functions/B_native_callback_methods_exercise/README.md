```js
// snippet-5

let nums = [3, 7, 2, 9];

let res1 = nums.reduce(function (a, b) {
  return a + b;
});

console.log(res1);


let res2 = nums.reduce(function (a, b) {
  return a + b;
}, -10);

console.log(res2);

let res3 = nums.reduce(function (a, b) {
  if (b < a) {
    return b;
  } else {
    return a;
  }
});

console.log(res3);
```
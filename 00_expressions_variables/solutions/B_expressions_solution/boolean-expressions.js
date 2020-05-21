console.log(false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true

console.log(false && false); // false
console.log(false && true); // false
console.log(true && false); // false
console.log(true && true); // true

console.log(false || false); // false
console.log(false || true); // true
console.log(true || false); // true
console.log(true || true); // true

console.log(!false || false); // true
console.log(false || (true && true)); // true
console.log(false || !(true && true)); // false
console.log(!true && (true)); // false
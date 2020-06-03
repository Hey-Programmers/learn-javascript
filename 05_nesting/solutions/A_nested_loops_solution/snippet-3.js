// snippet 3
let friends = ["philip", "abby", "phelipe", "simcha"];

for (let i = 0; i < friends.length; i++) {
  for (let j = 0; j < friends.length; j++) {
    console.log(friends[i], friends[j]);
  }
}

// philip philip
// philip abby
// philip phelipe
// philip simcha
// abby philip
// abby abby
// abby phelipe
// abby simcha
// phelipe philip
// phelipe abby
// phelipe phelipe
// phelipe simcha
// simcha philip
// simcha abby
// simcha phelipe
// simcha simcha
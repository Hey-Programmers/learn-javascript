// Write a function `wordCount(sentence, targetWords)` that accepts a sentence string and an array of
// `targetWords`. The function should return a count of the number of words of the sentence that are
// in `targetWords`.

let wordCount = function (sentence, targetWords) {
  let words = sentence.split(' ');
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (targetWords.includes(word)) {
      count++;
    }
  }

  return count;
};

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3
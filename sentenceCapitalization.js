'use strict';
// Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g

// convert text to array of words
// loop through array
// .toUpperCase first letter of each word and push to new array
// .join to return to a sentence

function capSentence(text) {
  text = text.toLowerCase().split(' ');
  const textCapped = text.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  // for (let word of text) {
  //   textCapped.push(word.charAt(0).toUpperCase() + word.slice(1));
  // }
  return textCapped.join(' ');
}

capSentence('THE TALES OF SCOTCH!'); // would return 'The Tales Of Scotch!'
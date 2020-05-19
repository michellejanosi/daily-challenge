'use strict';
/*
Given two strings of equal length, calculate and return the the hamming distance. E.g
hammingDistance('rover', 'river') // should return 1
*/

function hammingDistance(textA, textB) {
  if (textA.length !== textB.length) {
    throw new Error('String lengths are not equal');
  }

  let distance = 0;

  for (let i = 0; i < textA.length; i++) {
    if (textA[i].toLowerCase() !== textB[i].toLowerCase()) {
      distance++;
    }
  }

  return distance;
}

return hammingDistance('lovers', 'loving'); // should return 3
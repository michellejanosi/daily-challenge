'use strict';
/*
Write a function that accepts a string and returns the same string with all even indexed characters uppercased and all odd indexed characters lowercased.

This indexing should be zero-based with the index in position zero being considered even. The input string will consist of only alphabetical characters and spaces. Spaces should only be present when there are multiple words.
*/

// loop through string array
// loop through word
// upper case each letter at even position
// return weird case sentence
function weirdCase(str) {
  return str.split(' ').map(word =>
    word.split('').map((ltr, i) =>
      i % 2 ? ltr.toLowerCase() : ltr.toUpperCase()
    ).join('')
  ).join(' ');
}

weirdCase('weird string case'); // WeIrD StRiNg CaSe
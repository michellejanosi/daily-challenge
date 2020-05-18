'use strict';
// Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g

// compare text with text reversed
// return true if equal else false
function palindromeChecker(text) {
  let reversedText = text.toLowerCase().split('').reverse().join('');
  return text === reversedText;
}

palindromeChecker('madam'); // will return true
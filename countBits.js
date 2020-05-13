'use strict';
/*
  Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
  Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

  write a function that converts an integer into its binary form. Then count the amount of bits that are within that binary form.
  As an example the number 6 coverts into 110 in its binary form. Then the function would count the "1"s which would give you an output of 2. So then the function in its completion would console.log 2 as your result.
*/

let countBits = function (n) {
  let binary = (n >>> 0).toString(2);
  let counter = 0;

  for (let num of binary) {
    if (num === '1') {
      counter++;
    }
  }
  return counter;
};

countBits(1234);
'use strict';
/*
Write a function that accepts a sequence of Reindeer names, and returns a sequence with the Reindeer names sorted by their last names.
*/

// input is an array of names => output is sort by last name

const reindeerNames = [
  'Dasher Tonoyan',
  'Dancer Moore',
  'Prancer Chua',
  'Vixen Hall',
  'Comet Karavani',
  'Cupid Foroutan',
  'Donder Jonker',
  'Blitzen Claus'
];

function sortReindeer(names) {
  return names.sort((a, b) => a.split(' ')[1].localeCompare(b.split(' ')[1]));
}

sortReindeer(reindeerNames);

// some help from stackoverflow on this one: https://stackoverflow.com/questions/54859148/javascript-sort-a-string-array-by-last-name
'use strict';
/*
Create a function that removes the first and last letters of a string. Strings with two characters or less are considered invalid. You can choose to have your function return null or simply ignore.
*/

function removeChar(str) {
  return str.slice(1, -1);
}

removeChar('eloquent'); // 'loquen'
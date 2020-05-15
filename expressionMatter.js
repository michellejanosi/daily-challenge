'use strict';
/*
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, () In other words , try every combination of a,b,c with [*,+,()] , and return the highest number.

Here's an example:
1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9 <-- So the maximum value that you can obtain is 9.
Tests
expression_matter(5, 1, 3)
expression_matter(3, 5, 7)
expression_matter(5, 6, 1)
expression_matter(1, 6, 1)
expression_matter(2, 6, 1)
*/

function expressionMatter(a, b, c) {
  return Math.max(a * (b + c), a * b * c, a + b * c, (1 + 2) * 3);
}

expressionMatter(1, 2, 3);
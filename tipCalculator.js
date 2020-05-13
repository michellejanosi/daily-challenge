'use strict';
/*
  Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

  You need to consider the following ratings:

  Terrible: tip 0%
  Poor: tip 5%
  Good: tip 10%
  Great: tip 15%
  Excellent: tip 20%
  The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

  "Rating not recognised" in Javascript, Python and Ruby...
  ...or null in Java
  ...or -1 in C#
  Because you're a nice person, you always round up the tip, regardless of the service.

  Examples
    calculatetip(30, "poor") => 2
    calculatetip(20, "hi")=> "Rating Not Recognized"
    calculatetip(107.65, "great") => 17

  input: total amount of bill, service rating
  output: tip amount
  rating is case sensitive: .toLowerCase()
  round up the tip: .ceil()
*/

// set variable to equal rating choices
// set rating to equal rating.toLowerCase()
// if the rating is in ratings, return the rating tip amount * total amount
// else return 'Rating Not Recognized'

const ratings = {
  'poor': 0.05,
  'good': 0.10,
  'great': 0.15,
  'excellent': 0.20
};

const calculateTip = function (amount, rating) {
  rating = rating.toLowerCase();
  return rating in ratings ? Math.ceil(ratings[rating] * amount) : 'Rating Not Recognized';
};

calculateTip(107.65, 'great');

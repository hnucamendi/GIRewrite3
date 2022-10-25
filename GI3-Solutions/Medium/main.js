"use strict";

/**
 * MEDIUM:
 * Write a function that takes in an array of numbers and outputs the average of all the numbers.
 * Equation: sum of all variables / amount of variables
 *
 * @param {slices} string - Name of exercise
 * @param {people} string - Name of exercise
 * @returns {string} Interpolated string with the exercise for that day
 */

const sharePizza = (slices) => (people) =>
  `Each person gets ${(slices / people).toFixed(
    2
  )} slices of pizza; from our ${slices} slice pizza`;

console.log(sharePizza(8)(2)); // Output: Each person gets 4 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8)(3)); // Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
console.log(sharePizza(21)(20)); // Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
console.log(sharePizza(10)(3)); // Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza

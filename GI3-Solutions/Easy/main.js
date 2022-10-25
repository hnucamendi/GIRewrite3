"use strict";

/**
 * EASY:
 * Write a function that takes in an array of numbers and outputs the average of all the numbers.
 * Equation: sum of all variables / amount of variables
 *
 * @param {exercise} string - Name of exercise
 * @returns {string} Interpolated string with the exercise for that day
 */

const exercise = (exercise) => () => `Today's exercise: ${exercise}`;

console.log(exercise("Running")()); // Output: Today's exercise: Running
console.log(exercise("Swimming")()); // Output: Today's exercise: Swimming
console.log(exercise("Dancing")()); // Output: Today's exercise: Dancing
console.log(exercise("Fencing")()); // Output: Today's exercise: Fencing

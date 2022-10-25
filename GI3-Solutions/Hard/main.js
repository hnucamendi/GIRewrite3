"use strict";

/**
 * HARD:
 * Create two buttons in an HTML file and link it to this JavaScript file for this to work.
 * one button turns the background color of its button square to red when clicked.
 * The other button turns the background color to blue when clicked.
 *
 * No functions for required, use the DOM
 */

const buttonOne = document.querySelector(".button-one");
const buttonTwo = document.querySelector(".button-two");

buttonOne.addEventListener("mousedown", () => {
  buttonOne.style.backgroundColor = "red";
  buttonOne.addEventListener("mouseup", () => {
    buttonOne.style.backgroundColor = "";
  });
});

buttonTwo.addEventListener("mousedown", () => {
  buttonTwo.style.backgroundColor = "blue";
  buttonTwo.addEventListener("mouseup", () => {
    buttonTwo.style.backgroundColor = "";
  });
});

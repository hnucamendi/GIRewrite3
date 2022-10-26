"use strict";

/**
 * VERY HARD:
 * You are given coins of different denominations and a total amount of money amount.
 * Write a function to compute the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * Note: You may assume that you have an infinite number of each kind of coin.
 */

/**
 *
 * @class Person
 * @classdesc Creates a Person instance
 */

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

/**
 * exercise
 * @returns {string} "running is fun!"
 */

Person.prototype.exercise = function () {
  return "running is fun!";
};

/**
 * fetchJob
 * @returns {string} "Interpolated string"
 */

Person.prototype.fetchJob = function () {
  return `${this.name} is a ${this.job}`;
};

/**
 * @class Programmer
 * @classdesc Creates a Programmer instance
 */

function Programmer(name, age, job, language) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.language = language;
}

Object.setPrototypeOf(Programmer.prototype, Person.prototype);

/**
 * completeTask
 * @method Sets busy to false when called
 */

Programmer.prototype.completeTask = function () {
  this.busy = false;
};

/**
 * acceptNewTask
 * @method Sets busy to true when called
 */

Programmer.prototype.acceptNewTask = function () {
  this.busy = true;
};

/**
 * offerNewTask
 * @method if not busy sends a message that the programmer is ready for a new task, otherwise if busy, sends a message that the programmer is busy
 * @returns {string} Interpolated string
 */

Programmer.prototype.offerNewTask = function () {
  if (this.busy === false) return `${this.name} is ready to accept a new task`;
  return `${this.name} cannot accept any new tasks at the moment`;
};

/**
 * learnLanguage
 * @method adds languages to the array of languages a Programmer has
 */

Programmer.prototype.learnLanguage = function (lan) {
  this.language.push(lan);
};

/**
 * listLanguage
 * @method Returns the list of languages that a programmer knows
 * @returns {string[]} List of languages
 */

Programmer.prototype.listLanguage = function () {
  return this.language;
};

const person1 = new Person("Harold", 20, "Backend Engineer");
const programmer1 = new Programmer("Harold", 35, "DevOps", [
  "HTML",
  "C#",
  "LUA",
]);

const programmer2 = new Programmer("Edwin", 89, "janitor", [
  "HTML",
  "SASS,Ruby",
]);

const programmer3 = new Programmer("Emmanuel", 31, "SysOps", [
  ("HTML", "CSS", "JS", "FUN"),
]);

programmer1.learnLanguage("CSS");
programmer2.learnLanguage("C++");
programmer3.learnLanguage("JAVA");

console.log(programmer1.listLanguage());
console.log(programmer2.listLanguage());
console.log(programmer3.listLanguage());

console.log(person1);
console.log(programmer1);
console.log(programmer2);
console.log(programmer3);
console.log(person1.exercise());
console.log(person1.fetchJob());

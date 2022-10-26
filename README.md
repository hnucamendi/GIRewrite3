# Guided Inquiry: JavaScript Week 3

- [Guided Inquiry: JavaScript Week 3](#guided-inquiry-javascript-week-3)
- [Learning Objectives](#learning-objectives)
- [Learning Resources](#learning-resources)
- [Challenges](#challenges)
  - [EASY:](#easy)
  - [MEDIUM:](#medium)
  - [HARD:](#hard)
  - [VERY HARD:](#very-hard)
- [Submission](#submission)

# Learning Objectives

- Become comfortable creating and working with Functions, Arrays and Objects
- Differentiate between the terms: Objects, Properties and Methods
- Demonstrate an understanding
  - Logical Operators, Functions and Arrays. Prototypes
- Understand the importance and use of the following in JavaScript
  - Loops and Iteration Events, Execution Context, Hoisting, Scope and ‘this’
- Practice advanced JavaScript concepts including
  - Inheritance, Prototype Chain, First Class Functions, Closures
- Become comfortable working with ES6 additions including
  - Const, Let, Template Literals, Arrow functions, Destructuring, Spread Operators, Rest Parameters, Default Parameters, Maps, and Classes

# Learning Resources

Udemy Video: CSS The Complete JavaScript Course
[The Complete JavaScript Course](https://redventures.udemy.com/course/the-complete-javascript-course)

# Challenges

Please push your completed project to a repository on Github. Provide the link to your repo.

## [EASY](./GI3/Easy/):

A local gym wants to implement an "exercise of the day" program where there is a free class that day that promotes a certain exercise. The gym needs some backend logic that will update their system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like `Today's exercise: running`

Note: you should only write one function that can dynamically print the value of the exercise for that day, and it must be a closure

```JavaScript
console.log(exercise("Running")()); // Output: Today's exercise: Running
console.log(exercise("Swimming")()); // Output: Today's exercise: Swimming
console.log(exercise("Dancing")()); // Output: Today's exercise: Dancing
console.log(exercise("Fencing")()); // Output: Today's exercise: Fencing
```

## [MEDIUM](./GI3/Medium/):

Write a function that will allow you to calculate how many slices of pizza `x` each person `y` would get if they shared evenly. The function should return an interpolated string like `Each person gets 4.00 slices of pizza; from our 8 slice pizza` `x` being a decimal incase there is no way to split the pizza evenly.

Note: you should only write one function that can dynamically print the value of the exercise for that day, and it must be a closure

Example:

```JavaScript
console.log(sharePizza(8)(2)); // Output: Each person gets 4 slices of pizza; from our 8 slice pizza
console.log(sharePizza(8)(3)); // Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
console.log(sharePizza(21)(20)); // Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
console.log(sharePizza(10)(3)); // Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
```

## [HARD](./GI3/Hard/):

Create either a class or a function with clousres called `patientInformation`. It should contain at least two properties `name` and `ssn`. The `name` property does not need to be private and can be fetched directly, but the `ssn` property should only be manipulated through the use of `getters` you should not be able to get the value of ssn directly from where it is defined.

```JavaScript
console.log(patient2.names); // Output: Undefined
console.log(patient2.ssn); // Output: Undefined
console.log(patient2.getName()); // Output: John
console.log(patient2.getSSN()); // Output: 123-45-6789
```

## [VERY HARD](./GI3/Very%20Hard/):

Object prototype chain and prototypal inheritance exercise

1. Create a Person constructor that has three properties: `name`, `job`, and `age`.
2. Give the Person an `exercise` method that logs some message to the console e.g. `Running is fun! - said no one ever`.
3. Give the Person a `fetchJob` method that console logs the person's `name` and `job`, e.g. `Brad is a back-end developer`.
4. Create a Programmer constructor that inherits all the members from Person with an additional `languages` property that is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a `completeTask` method that updates the busy property on that programmer to be false. Also give the Programmer an `acceptNewTask` method that updates the busy property on that programmer to be true.
6. Give the Programmer an `offerNewTask` method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out `Mark can't accept any new tasks right now.` and `Mark would love to take on a new responsibility.` if the programmer is not busy.
7. Give the Programmer `learnLanguage` and `listLanguages` methods that add new languages to the programmer and list off all languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?

Note: Do not use classes; you must use prototype chaining and prototype inheritance

```JavaScript
const person1 = new Person("Harold", "Backend Engineer", 20);
const programmer1 = new Programmer("Harold", "DevOps", 35, [
  "HTML",
  "C#",
  "LUA",
]);

const programmer2 = new Programmer("Edwin", "janitor", 89, [
  "HTML",
  "SASS,Ruby",
]);

const programmer3 = new Programmer("Emmanuel", "SysOps", 31, [
  ("HTML", "CSS", "JS", "R"),
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
person1.exercise();
person1.fetchJob();
```

# Submission

Submit the URL to your individual repository that contains your assignment to Canvas. Make sure to check that your content was successfully pushed / uploaded. The deadline is <strong> 11:59pm EST, Monday, 5/2/2022</strong>.

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

- Continue building proficiency with key concepts
  - Variables, Data Types, Type Coercion, Basic Operators and Operator Precedence
- Understand the use of Logical Operators
  - Boolean, If/Else, Ternary and Switch Statements
- Become comfortable creating and working with Functions, Arrays and Objects
- Differentiate between the terms: Objects, Properties and Methods
- Demonstrate an understanding
  - Logical Operators, Functions and Arrays
- Understand the importance and use of the following in JavaScript
  - Loops and Iteration Events, Execution Context, Hoisting, Scope and ‘this’
- Practice advanced JavaScript concepts including
  - Inheritance, Prototype Chain, First Class Functions, Closures, Immediately Invoked Function Expressions and Closures
- Become comfortable working with ES6 additions including
  - Const, Let, Template Literals, Arrow functions, Destructuring, Spread Operators, Rest Parameters, Default Parameters, Maps, and Classes
- Understand Asynchronous JavaScript
- Make AJAX calls to 3rd party APIs using Fetch and Async/ Await
- Practice by coding alongside of the assigned videos

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
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3));
  // prints "Each person gets 2.67 slices of pizza"
```

## [HARD](./GI3/Hard/):

Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.
Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.

## [VERY HARD](./GI3/Very%20Hard/):

Object prototype chain and prototypal inheritance exercise.

1. Create a Person constructor that has three properties: name, job, and age.
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their own properties properly and independently of the other programmers?
   Bonus - ES6 Syntax: Use ES6 Syntax in your answer. Feel free to add on new methods or properties to incorporate the syntax.

Example:

```JavaScript
function Person(name, job, age) { }
function Programmer(name, job, age, languages) { }
```

# Submission

Submit the URL to your individual repository that contains your assignment to Canvas. Make sure to check that your content was successfully pushed / uploaded. The deadline is <strong> 11:59pm EST, Monday, 5/2/2022</strong>.

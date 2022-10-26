"use strict";

/**
 * HARD:
 * @class PatientInformation
 * @classdesc Create either a class or a function with clousres called patientInformation.
 * It should contain at least two properties `name` and `ssn`.
 * The `name` property does not need to be private and can be fetched directly,
 * but the `ssn` property should only be manipulated through the use of `getters` and `setters`
 * you should not be able to get the value of ssn directly from where it is defined.
 */

// *** Solution using closures ***
const patientInformation = () => {
  const names = "Justin";
  const ssn = "123-45-6789";

  const getName = () => names;

  const getSSN = () => ssn;

  return {
    getName,
    getSSN,
  };
};

const patient1 = patientInformation();

console.log("closure:", patient1.names);
console.log("closure:", patient1.ssn);
console.log("closure:", patient1.getName());
console.log("closure:", patient1.getSSN());

// *** Solution using a class ***
class PatientInformation {
  #names = "John";
  #ssn = "987-65-4321";

  getName() {
    return this.#names;
  }
  getSSN() {
    return this.#ssn;
  }
}

const patient2 = new PatientInformation();
console.log("class:", patient2.names);
console.log("class:", patient2.ssn);
console.log("class:", patient2.getName());
console.log("class:", patient2.getSSN());

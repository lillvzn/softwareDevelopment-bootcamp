// <----------- strict mode ----------->
// should be in the beginning of script (almost always ON)
// write more secure code, avoid accidental bugs
// creates visible errors in console
// detect reserved words

"use strict";

/*

let hasDriverLicense = false;
const passTest = true;

if (passTest) {
  hasDriverLicense = true;
}
if (hasDriverLicense) console.log("Drive");

// <----------- Functions ----------->

console.log("<---- Functions ---->");

function logger() {
  // function buddy
  console.log("My name is!");
}

// call function
logger();

function fruitProcessor(fruit1, fruit2) {
  // parameters
  console.log(fruit1, fruit2);
  const juice = `Juice with ${fruit1} and ${fruit2} makes a healthy drink!`;
  return juice;
}

const bestJuice = fruitProcessor("peaches", "berries"); // arguements
console.log(bestJuice);

// <----------- Functions declarations and expressions ----------->

console.log("<---- Functions declarations and expressions ---->");

// function declaration

function calcAge1(birthYear) {
  return 2021 - birthYear;
}
console.log(calcAge1(1999));

// function expression

const ageUsingExpression = function (birthYear) {
  return 2021 - birthYear;
};
console.log(ageUsingExpression(1997));

*/

// <----------- Arrow functions ----------->

console.log("<---- Arrow functions ---->");

// arrow function

const ageUsingArrow = (birthYear) => 2021 - birthYear;
console.log(ageUsingArrow(1999));

const yearsUntilRetirement = (birthYear) => {
  const age = 2021 - birthYear;
  return 65 - age;
};
console.log(yearsUntilRetirement(1999));

const additionFunction = (num1, num2) => {
  const addition = num1 + num2;
  return addition;
};
console.log(additionFunction(4001, 79799));

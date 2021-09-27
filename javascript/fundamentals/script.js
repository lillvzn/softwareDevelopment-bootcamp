/* 

// ------------- Values and variables -------------

console.log("----- Values and Variables -----");

let firstName = "Daemon";

let country = "India";
let continent = "Asia";
let population = 130000000;

console.log(country);
console.log(continent);
console.log(population);

// ------------- Datatypes -------------

console.log("----- Datatypes -----");

let age = 22; // number
let first = "Place"; // string
let answerVal = true; // boolean
let ball; // undefined
let nullVal = null; // null
// symbol
// BigInt

console.log(typeof age);
console.log("first:", typeof first);
console.log(typeof answerVal);
console.log(typeof ball);
console.log(typeof nullVal, ": null is not an object"); // null is not an object

first = 73572; // reassign
console.log("first:", typeof first);

// let, const and var

// let: can be reassigned / mutated
// const: cannot be changed once declared (immutable)
//      : cannot be undefined either
// var: (AVOID MOSTLY) declared variables prior to ES6 (similar to let)

let letVar = "Can mutate and can have undefined"; // blog scoped
const constVar = "Cannot mutate and can't be empty";
var varVar = "Legacy way of declaring variables"; // function scoped

console.log("let:", letVar);
console.log("const:", constVar);
console.log("var:", varVar);

// ------------- Basic Operators -------------

console.log("----- Operators -----");

const currentYear = 2032;
const birthYear = 2001;

// Math operators

console.log(currentYear + birthYear); // addition
console.log(currentYear - birthYear); // subtraction
console.log(currentYear / 4); // division
console.log(currentYear * 3); // multiplication
console.log(currentYear ** 2); // exponential

const brandName = "Pelt";
const brandTitle = "Say no more!";

console.log(brandName + ": " + brandTitle);
// console.log(brandName, ":", brandTitle);

// Assignment operators

let x = 10 + 5;
x *= 10; // x = x * 10
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparision operators

console.log(currentYear > birthYear); // example
// others: <, >=, <=

// CHALLENGE

// test data 1
const marksMass = 78;
const marksHeight = 1.69;

const johnsMass = 92;
const johnsHeight = 1.95;

// test data 2
// const marksMass = 95;
// const marksHeight = 1.88;

// const johnsMass = 85;
// const johnsHeight = 1.76;

const marksBMI = marksMass / marksHeight ** 2;
const johnsBMI = johnsMass / johnsHeight ** 2;

console.log(marksBMI, johnsBMI);

const markHigherBMI = marksBMI > johnsBMI;

if (markHigherBMI) {
  console.log(markHigherBMI, "Mark has higher BMI");
} else {
  console.log(markHigherBMI, "John has higher BMI");
}

// ------------- Strings and Template Literals -------------

console.log("----- Strings and Template Literals -----");

const myName = "Punith";
const myJob = "Student";
const birthDay = "Sunday";
const yearOfBirth = 1999;
const curYear = 2021;

// const punith =
//   "I'm " + myName + ", a " + (curYear - yearOfBirth) + " year old " + myJob;

// template literals (backticks) -> can be used for regular strings as well
const punith = `I'm ${myName}, a ${curYear - yearOfBirth} year old ${myJob}`;
console.log(punith);

console.log("String \nwith \nmultiple lines");

console.log(`String
with
multiple lines
using backticks!`);

// ------------- conditional statements -------------

console.log("----- if / else statements -----");

const amount = 196;

if (amount >= 199) {
  console.log("The price is high");
} else {
  console.log("The price is good");
}

const shopNum = 36;
let price;

if (shopNum <= 35) {
  price = 1.99;
} else {
  price = 1.89;
}

console.log(price);

// CHALLENGE

// test data 1
// const playerOneMass = 78;
// const playerOneHeight = 1.69;

// const playerTwoMass = 92;
// const playerTwoHeight = 1.95;

// test data 2
const playerOneMass = 95;
const playerOneHeight = 1.88;

const playerTwoMass = 85;
const playerTwoHeight = 1.76;

const playerOneBMI = playerOneMass / playerOneHeight ** 2;
const playerTwoBMI = playerTwoMass / playerTwoHeight ** 2;

console.log(playerOneBMI, playerTwoBMI);

if (playerOneBMI > playerTwoBMI) {
  console.log(
    `Player One has a higher BMI of ${
      Math.round((playerOneBMI + Number.EPSILON) * 100) / 100
    }`
  );
} else {
  console.log(
    `Player Two has a higher BMI of ${
      Math.round((playerTwoBMI + Number.EPSILON) * 100) / 100
    }`
  );
}

// ------------- Type conversion and coercion -------------

console.log("----- Type conversion and coercion -----");

//type conversion (manual)
const inputYear = "1999";
console.log(Number(inputYear) + 18); // convert string to number (int)
// NaN: Invalid number
const stringVal = 1466;
const stringToNum = String(stringVal);
console.log(typeof stringToNum);

// type coercion
// js figures the data-type

console.log("This is " + 76 + " kilograms");
console.log("55" - "80" - 56);
console.log("26" * "4");
console.log("23" < "80"); 

*/

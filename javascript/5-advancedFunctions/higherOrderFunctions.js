"use strict";

// function that receives another function as an arguement or returning another function (higer order function)
// all first class functions are either objects or values

// 1 - functions accepting callback function

const oneWord = function (word) {
  return word.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (word) {
  const [first, ...others] = word.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// higher order
const transformer = function (word, fn) {
  console.log(`Original: ${word}`);
  console.log(`After: ${fn(word)}`);
  console.log(`Using: ${fn.name}`);
};

const sentence = "javascript is the best scripting language out there.";
transformer(sentence, upperFirstWord);
transformer(sentence, oneWord);

// 2 - functions returning function

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hey");
greetHey("Susan");
greetHey("Smith");

greet("Hello")("Paul");

// CHALLENGE (Same as above - use arrow funct)
const greetArrow = (greeting) => (name) =>
  console.log(`Using Arrow function: ${greeting} ${name}`);

greetArrow("Hola")("Amigo");

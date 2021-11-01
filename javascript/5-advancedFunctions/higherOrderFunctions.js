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
